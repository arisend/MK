
import {renderLogs,enemyAttack,playerAttack, createElement,generateLogs,player1,player2,changeHP,elHP,renderHP,showReesult} from './utils.js'



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

renderLogs(generateLogs('start',player1,player2));

const {name,life,img,player:playerONE,value} = player1;
const {name:name2,life:life2,img:img2,player:playerTWO,value:value2} = player2;

const $formFight=document.querySelector(".control");
const $arenas=document.querySelector(".arenas");
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


