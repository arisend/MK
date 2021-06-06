$arenas=document.querySelector(".arenas");
$randomButton = document.querySelector('.button');
player1 = {
	player:1,
	name:'Scorpion',
	hp:100,
	weapon:'Fire',
	attack:function(name) {console.log(name + ' Fight...');},
	img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
};

player2 = {
	player:2,
	name:'SUB-ZERO',
	hp:100,
	weapon:'Ice',
	attack:function(name) {console.log(name + ' Fight...');},
	img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'
};

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
function changeHP(player) {
	const $playerLife = document.querySelector('.player'+ player.player +' .life');
	
	player.hp -= Math.ceil(Math.random()*20);
	if (player.hp<0){player.hp=0};
	$playerLife.style.width = player.hp + '%';
	if (player.hp==0)
	{$randomButton.disabled = true;
		
		if (player.player==1){$arenas.appendChild(playerLose(player2.name))}
	else{$arenas.appendChild(playerLose(player1.name))}
	}
}
function playerLose(name){
	const $loseTitle = createElement('div', 'loseTitle');
	$loseTitle.innerText = name + ' win';
	return $loseTitle
}

$randomButton.addEventListener('click',function(){
	console.log('test')
	changeHP(player1);
	changeHP(player2);
	
});

$arenas.appendChild(createPlayer( player1.name, player1.life,player1.img,player1.player));
$arenas.appendChild(createPlayer( player2.name, player2.life,player2.img,player2.player));

