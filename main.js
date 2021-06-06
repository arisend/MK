
player = {
	name:'Scorpion',
	hp:100,
	weapon:'Knife'
};


function createPlayer(playerClass,playerName,playerLife,imgsrc) {
	const $player = document.createElement('div');
	$player.classList.add(playerClass);
	const $progressbar = document.createElement('div');
	$progressbar.classList.add("progressbar");
	const $character = document.createElement('div');
	$character.classList.add("character")
	const $life = document.createElement('div');
	$life.style.width=playerLife + "%";
	$life.style.color = "red";
	$life.classList.add("life")
	const $name = document.createElement('div');
	$name.innerText=playerName;
	$name.classList.add("name")
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$img = document.createElement('img');
	$img.src = imgsrc;
	$character.appendChild($img);
	$player.appendChild($progressbar);
	$player.appendChild($character);
	const $arenas=document.querySelector(".arenas");
	$arenas.appendChild($player);
};


createPlayer('player1', 'SCORPION', 50,'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif');
createPlayer('player2', 'SUB-ZERO', 80,'http://reactmarathon-api.herokuapp.com/assets/subzero.gif');
//createPlayer('player2', player.name);
