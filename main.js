const $arenas=document.querySelector(".arenas");
const $randomButton = document.querySelector('.button');
player1 = {
	player:1,
	name:'Scorpion',
	hp:100,
	weapon:'Fire',
	attack:function(name) {console.log(name + ' Fight...');},
	img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	changeHP: changeHP,
	renderHP:renderHP,
	elHP:elHP
};
player2 = {
	player:2,
	name:'SUB-ZERO',
	hp:100,
	weapon:'Ice',
	attack:function(name) {console.log(name + ' Fight...');},
	img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	changeHP: changeHP,
	renderHP:renderHP,
	elHP:elHP
};

<<<<<<< Updated upstream
function createElement(tag, className){
	const $tag = document.createElement(tag);
	if (className) {$tag.classList.add(className);}

	return $tag
}
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
function getRandom (len){
	return Math.ceil(Math.random()*len)
}
function changeHP(qty) {
	console.log(qty);
	this.hp -= qty;
	if (this.hp<0){this.hp=0};
}
function elHP(player) {
	const $playerLife = document.querySelector('.player'+ this.player +' .life');
	return $playerLife
}
function renderHP (object){
	object.style.width = this.hp + '%';
}
function createReloadButton () {
	const $reloadWrap = createElement('div',"reloadWrap");
	const $button = createElement('button',"button");
	$button.innerText="Restart";
	$reloadWrap.appendChild($button);
	return $reloadWrap
};
function playerWins(name){
	const $loseTitle = createElement('div', 'loseTitle');
	if (name){
	$loseTitle.innerText = name + ' win';
	} else {
		$loseTitle.innerText = 'draw';
		}
	
	return $loseTitle
}


$arenas.appendChild(createPlayer( player1.name, player1.life,player1.img,player1.player));
$arenas.appendChild(createPlayer( player2.name, player2.life,player2.img,player2.player));



$randomButton.addEventListener('click',function(){
	//console.log('test')
	player1.changeHP(getRandom (20));
	player2.changeHP(getRandom (20));
	player1.renderHP(player1.elHP());
	player2.renderHP(player2.elHP());
	
	if (player1.hp===0||player2.hp===0)
	{$randomButton.disabled = true;}

	if (player1.hp===0 && player1.hp < player2.hp){$arenas.appendChild(playerWins(player2.name));
		$arenas.appendChild(createReloadButton ());
		const $restartButton = document.querySelector('.reloadWrap .button');
		$restartButton.addEventListener('click',function(){
		window.location.reload();
		});}
	else if (player2.hp===0 && player2.hp < player1.hp){$arenas.appendChild(playerWins(player1.name));
		$arenas.appendChild(createReloadButton ());
		const $restartButton = document.querySelector('.reloadWrap .button');
		$restartButton.addEventListener('click',function(){
		window.location.reload();
		});}
	else if (player1.hp===0 && player2.hp===0){$arenas.appendChild(playerWins());
		$arenas.appendChild(createReloadButton ());
		const $restartButton = document.querySelector('.reloadWrap .button');
		$restartButton.addEventListener('click',function(){
		window.location.reload();
		});}
	
});
=======
import {Game} from './game/index.js';

const game = new Game();
>>>>>>> Stashed changes

game.start();
