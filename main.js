
import {renderLogs,enemyAttack,playerAttack, createElement,getRandom,createReloadButton,playerWins,appendReloadB} from './utils.js'
import {player1,player2,showReesult} from './players.js'
import {logs} from './logs.js'
function generateLogs(type,player1,player2,value){
	const date = new Date();
	console.log(player1)
	switch (type){
		case "hit":
			return date.getHours()+":"+date.getMinutes() + " - " + logs['hit'][getRandom(logs['hit'].length)-1].replace('[playerKick]',player1.name).replace('[playerDefence]',player2.name) + " -" + value + ` hp ${player2.hp}/100 hp`;
		case "defence":
			return date.getHours()+":"+date.getMinutes() + " - " +  logs['defence'][getRandom(logs['defence'].length)-1].replace('[playerKick]',player1.name).replace('[playerDefence]',player2.name);
		case "end":
			return date.getHours()+":"+date.getMinutes() + " - " +  logs['end'][getRandom(logs['end'].length)-1].replace('[playerWins]',player1.name).replace('[playerLose]',player2.name);
		case "draw":
			return date.getHours()+":"+date.getMinutes() + " - " +  logs['draw'][0];
		case "start":
			return logs['start'].replace('[player1]',player1.name).replace('[player2]',player2.name).replace('[time]',date.getHours()+":"+date.getMinutes());
	}
}
const $formFight=document.querySelector(".control");

function createPlayer(playerName,playerLife,imgsrc,player) {
	const $player = createElement('div','player'+player);
	const $progressbar = createElement('div',"progressbar");
	const $character = createElement('div',"character");
	const $life = createElement('div','life');
	const $name = createElement('div',"name");
	const $img = createElement('img');
	$life.style.width=playerLife + "%";
	$life.style.color = "red";



	$name.innerText=playerName;
	$name.classList.add()
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);

	$img.src = imgsrc;
	$character.appendChild($img);
	$player.appendChild($progressbar);
	$player.appendChild($character);
	return $player

};
const $arenas=document.querySelector(".arenas");

const {name,life,img,player:playerONE,value} = player1;
const {name:name2,life:life2,img:img2,player:playerTWO,value:value2} = player2;
$arenas.appendChild(createPlayer( name,life,img,playerONE));
$arenas.appendChild(createPlayer( name2, life2,img2,playerTWO));


renderLogs(generateLogs('start',player1,player2));










$formFight.addEventListener('submit',function(e){
	e.preventDefault();
	//console.dir($formFight);
	const enemy = enemyAttack();
	const player = playerAttack();

	console.log(player);
	console.log(enemy);
	
	if (player.hit !== enemy.defence ) {
		player2.changeHP(value2);
		player2.renderHP(player2.elHP());
		renderLogs(generateLogs('hit',player1,player2,player.value));
	} else{
		renderLogs(generateLogs('defence',player1,player2));
	}
	if (player.defence !== enemy.hit ) {
		player1.changeHP(value);
		player1.renderHP(player1.elHP());
		renderLogs(generateLogs('hit',player2,player1,enemy.value));
	} else {
		renderLogs(generateLogs('defence',player2,player1));
	}
	showReesult();

})


