const $arenas=document.querySelector(".arenas");
// const $randomButton = document.querySelector('.button');
player1 = {
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
player2 = {
	player:2,
	name:'SUB-ZERO',
	hp:100,
	weapon:'Ice',
	attack:function(name) {console.log(name + ' Fight...');},
	img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	changeHP,
	renderHP,
	elHP
};
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

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
	object.style.width = this.elHP + '%';
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
function appendReloadB() {
	const $restartButton = document.querySelector('.reloadWrap .button');
	$restartButton.addEventListener('click',function(){
	window.location.reload();
	});
}

$arenas.appendChild(createPlayer( player1.name, player1.life,player1.img,player1.player));
$arenas.appendChild(createPlayer( player2.name, player2.life,player2.img,player2.player));

function enemyAttack() {
	const hit = ATTACK[getRandom(3)-1];
	const defence = ATTACK[getRandom(3)-1];
	console.log('###: hit', hit);
	console.log('###: defence', defence);
	return {
		value: getRandom(HIT[hit]),
		hit,
		defence
	}
}



const $formFight=document.querySelector(".control");
$formFight.addEventListener('submit',function(e){
	e.preventDefault();
	console.dir($formFight);
	const enemy = enemyAttack();
	//console.log('###: enemy', enemy);
	const attack = {};
	for (let item of $formFight) {
		if (item.checked== true && item.name == 'hit') {
			attack.value = getRandom(HIT[item.value]),
			attack.hit = item.value
		}
		if (item.checked==true && item.name == 'defence') {
			attack.defence = item.value
		}
		item.checked= false;
	}
	console.log(attack);
	console.log(enemy);
	
	if (attack.hit !== enemy.defence ) {
		player2.changeHP(attack.value);
		player2.renderHP(player2.elHP());
	}
	if (attack.defence !== enemy.hit ) {
		player1.changeHP(enemy.value);
		player1.renderHP(player1.elHP());
	}
	if (player1.hp===0||player2.hp===0)
	{$formFight.disabled = true;
		$arenas.appendChild(createReloadButton ());
		appendReloadB();}


	if (player1.hp===0 && player1.hp < player2.hp){
		$arenas.appendChild(playerWins(player2.name));
	}
	else if (player2.hp===0 && player2.hp < player1.hp){
		$arenas.appendChild(playerWins(player1.name));
	}
	else if (player1.hp===0 && player2.hp===0){
		$arenas.appendChild(playerWins());
	}

})


