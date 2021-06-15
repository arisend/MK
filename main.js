// const logs = {
//     start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
//     end: [
//         'Результат удара [playerWins]: [playerLose] - труп',
//         '[playerLose] погиб от удара бойца [playerWins]',
//         'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
//     ],
//     hit: [
//         '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
//         '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
//         '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
//         '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
//         '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
//         '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
//         '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
//         '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
//         '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
//         '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
//         '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
//         '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
//         '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
//         '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
//         '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
//         '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
//         '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
//         '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
//     ],
//     defence: [
//         '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
//         '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
//         '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
//         '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
//         '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
//         '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
//         '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
//         '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
//     ],
//     draw: 'Ничья - это тоже победа!'
// };
import {logs} from './logs'

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
	name:'Sub-Zero',
	hp:100,
	weapon:'Ice',
	attack:function(name) {console.log(name + ' Fight...');},
	img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	changeHP,
	renderHP,
	elHP
};

renderLogs(generateLogs('start',player1,player2));

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
	//console.log('###: hit', hit);
	//console.log('###: defence', defence);
	return {
		value: getRandom(HIT[hit]),
		hit,
		defence
	}
}

function playerAttack(){
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

const $formFight=document.querySelector(".control");

function generateLogs(type,player1,player2,value){
	const date = new Date();
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
function renderLogs(text){
	const $chat = document.querySelector(".chat");
	const el = `<p>${text}</p>`
	$chat.insertAdjacentHTML('afterbegin',el)
}
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


