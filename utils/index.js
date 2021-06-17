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

