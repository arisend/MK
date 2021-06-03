function attack(playerName) {
	console.log(playerName +' Fight...');
}

const player1 = {'name':'Scorpion','hp':100,'weapon':['Knife','Fire']};
player1.attack=	attack(player1['name']);


function createPlayer(playerClass,playerName,playerLife) {
	const $player = document.createElement('div');
	$player.classList.add(playerClass);
	const $progressbar = document.createElement('div');
	const $character = document.createElement('div');
	$player.appendChild($progressbar);
	$player.appendChild($character);
	const $life = document.createElement('div');
	$life.style.width=playerLife;
	const $name = document.createElement('div');
	$name.innerText=playerName;
	$progressbar.appendChild($life);
	$progressbar.appendChild($name);
	$img = document.createElement('img');
	$img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
	$character.appendChild($img);
	const $root=document.querySelector('.root');
	const $arenas=$root.querySelector('div');
	$arenas.appendChild($player);
}




createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);
createPlayer('player2', player1.name);


