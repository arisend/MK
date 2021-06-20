import { ATTACK, HIT, LOGS } from '../../constants/index.js';

export const getRandom = (len) => Math.ceil(Math.random()*len)
export const createElement = (tag, className) =>  {
	const $tag = document.createElement(tag);
	if (className) {$tag.classList.add(className);}

	return $tag
}


const $formFight=document.querySelector(".control");
const $arenas=document.querySelector(".arenas");

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

export const generateLogs = (type,{name}={},{name:playerName2,hp}={},value) => {
	const date = new Date();

	switch (type){
		case "hit":
			return date.getHours()+":"+date.getMinutes() + " - " + LOGS['hit'][getRandom(LOGS['hit'].length)-1].replace('[playerKick]',name).replace('[playerDefence]',playerName2) + " -" + value + ` hp ${hp}/100 hp`;
		case "defence":
			return date.getHours()+":"+date.getMinutes() + " - " +  LOGS['defence'][getRandom(LOGS['defence'].length)-1].replace('[playerKick]',name).replace('[playerDefence]',playerName2);
		case "end":
			return date.getHours()+":"+date.getMinutes() + " - " +  LOGS['end'][getRandom(LOGS['end'].length)-1].replace('[playerWins]',name).replace('[playerLose]',playerName2);
		case "draw":
			return date.getHours()+":"+date.getMinutes() + " - " +  LOGS['draw'][0];
		case "start":
			return LOGS['start'].replace('[player1]',name).replace('[player2]',playerName2).replace('[time]',date.getHours()+":"+date.getMinutes());
		default:
			return ""
	}
}

export const showReesult = (player1,player2) =>{
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
export  const getPlayers = async() => {
	const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
	return body;
}
export const startGame = async () => {
	const players = await getPlayers();
	//console.log(players);
	const p1 = players[getRandom(players.length) -1]
	const p2 = players[getRandom(players.length) -1]
	console.log(p1,p2)
	return {p1,p2}
	}

export const gameTurn = async(object) => {
	console.log(object);
		const body = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
		method: 'POST',
		body: JSON.stringify({
			hit:`${object.hit}`, defence: `${object.defence}`,
		})
	}).then(res => res.json());
	return body;
}
export const nextTurn = async (object) => {
	const turn = await gameTurn(object);
	return turn
}
//





