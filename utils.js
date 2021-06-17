
import {logs} from './logs.js'
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const $formFight=document.querySelector(".control");


export const renderLogs = (text) => {
	const $chat = document.querySelector(".chat");
	const el = `<p>${text}</p>`
	$chat.insertAdjacentHTML('afterbegin',el)
}
export const enemyAttack = () =>  {
	const hit = ATTACK[getRandom(3)-1];
	const defence = ATTACK[getRandom(3)-1];
	//console.log('###: hit', hit);
	//console.log('###: defence', defence);
	return {
		value: getRandom(HIT[hit]),
		hit,
		defence
	}
}
export const playerAttack = () => {
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
	return attack;
}

export function createElement(tag, className){
	const $tag = document.createElement(tag);
	if (className) {$tag.classList.add(className);}

	return $tag
}
export const getRandom = (len) => Math.ceil(Math.random()*len)


export const createReloadButton = () => {
	const $reloadWrap = createElement('div',"reloadWrap");
	const $button = createElement('button',"button");
	$button.innerText="Restart";
	$reloadWrap.appendChild($button);
	return $reloadWrap
};
export const playerWins = (name) => {
	const $loseTitle = createElement('div', 'loseTitle');
	if (name){
	$loseTitle.innerText = name + ' win';
	} else {
		$loseTitle.innerText = 'draw';
		}

	return $loseTitle
}
export const appendReloadB = () => {
	const $restartButton = document.querySelector('.reloadWrap .button');
	$restartButton.addEventListener('click',function(){
	window.location.reload();
	});
}   

//

export function generateLogs(type,player1,player2,value){
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
		default:
			return ""
	}
}
export const player1 = {
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
export const player2 = {
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
export function changeHP(qty) {
	//console.log(qty);
	this.hp -= qty;
	if (this.hp<0){
		this.hp=0
	};
}
export function elHP(player) {
	const $playerLife = document.querySelector('.player'+ this.player +' .life');
	
	return $playerLife
}
export function renderHP (object){
	object.style.width = this.hp + '%';
	
}
export function showReesult(){
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




