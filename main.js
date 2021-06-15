
import {renderLogs,enemyAttack,playerAttack, createElement,getRandom,createReloadButton,playerWins,appendReloadB} from './utils.js'
import {logs} from './logs.js'
function generateLogs(type,player1,player2,value){
	const date = new Date();
	console.log(player2)
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
 const player1 = {
	player:1,
	name:'Scorpion',
	hp:100,
	weapon:'Fire',
	attack:function(name) {console.log(name + ' Fight...');},
	img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	changeHP,
	renderHP,
	elHP
};
 const player2 = {
	player:2,
	name:'Sub-Zero',
	hp:100,
	weapon:'Ice',
	attack:function(name) {console.log(name + ' Fight...');},
	img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	changeHP,
	renderHP,
	elHP
};
 function changeHP(qty) {
	//console.log(qty);
	this.hp -= qty;
	if (this.hp<0){
		this.hp=0
	};
}
 function elHP(player) {
	const $playerLife = document.querySelector('.player'+ this.player +' .life');
	
	return $playerLife
}
 function renderHP (object){
	object.style.width = this.hp + '%';
	
}
function showReesult(){
	if (player1.hp===0||player2.hp===0)
	{$formFight.disabled = true;
		$arenas.appendChild(createReloadButton ());
		appendReloadB();}


	if (player1.hp===0 && player1.hp < player2.hp){
		$arenas.appendChild(playerWins(player2.name));
		renderLogs(generateLogs('end',player2,player1));
	}
	else if (player2.hp===0 && player2.hp < player1.hp){
		$arenas.appendChild(playerWins(player1.name));
		renderLogs(generateLogs('end',player1,player2));
	}
	else if (player1.hp===0 && player2.hp===0){
		$arenas.appendChild(playerWins());
		renderLogs(generateLogs('draw'));
	}
}



console.log(player2,player1)
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
renderLogs(generateLogs('start',player1,player2));

const {name,life,img,player:playerONE,value} = player1;
const {name:name2,life:life2,img:img2,player:playerTWO,value:value2} = player2;

$arenas.appendChild(createPlayer( name,life,img,playerONE));
$arenas.appendChild(createPlayer(  name2, life2,img2,playerTWO));



$formFight.addEventListener('submit',function(e){
	e.preventDefault();
	//console.dir($formFight);
	const enemy = enemyAttack();
	const player = playerAttack();

	console.log(player);
	console.log(enemy);
	
	if (player.hit !== enemy.defence ) {
		player2.changeHP(player.value);
		player2.renderHP(player2.elHP());
		renderLogs(generateLogs('hit',player1,player2,player.value));
	} else{
		renderLogs(generateLogs('defence',player1,player2));
	}
	if (player.defence !== enemy.hit ) {
		player1.changeHP(enemy.value);
		player1.renderHP(player1.elHP());
		renderLogs(generateLogs('hit',player2,player1,enemy.value));
	} else {
		renderLogs(generateLogs('defence',player2,player1));
	}
	showReesult();

})


