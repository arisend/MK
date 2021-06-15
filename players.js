import {changeHP,elHP,renderHP} from './utils.js'

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
