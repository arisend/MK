

import { getRandom,createElement,renderLogs,enemyAttack,playerAttack,createReloadButton,appendReloadB,playerWins,generateLogs,showReesult } from '../../utils/index.js';
import {Player} from '../../Player/index.js';
import { ATTACK, HIT, LOGS } from '../../constants/index.js';


export class Game {
    constructor(){
        
        }



        start = () => {
            const player1 = new Player({
                player:1,
                name:'Scorpion',
                hp:100,
                img:'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
                rootSelector: 'arenas',
            });
            
            const player2 = new Player ({
                player:2,
                name:'Sub-Zero',
                hp:100,
                weapon:'Ice',
                img:'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
                rootSelector: 'arenas',
            });
        
        
        
        
        
        player1.createPlayer();
        player2.createPlayer();
        renderLogs(generateLogs('start',player1,player2));
        
        const $formFight=document.querySelector(".control");
        const $arenas=document.querySelector(".arenas");
        
        $formFight.addEventListener('submit',function(e){
            e.preventDefault();
            //console.dir($formFight);
            const {hit:hitEnemy,defence:defenceEnemy,value:valueEnemy} = enemyAttack();
            const {hit,defence,value,elHP} = playerAttack();
        
            
            
            if (hit !== defenceEnemy ) {
                player2.changeHP(value);
                player2.renderHP(player2.elHP());
                renderLogs(generateLogs('hit',player1,player2,value));
            } else{
                renderLogs(generateLogs('defence',player1,player2));
            }
            if (defence !== hitEnemy ) {
                player1.changeHP(valueEnemy);
                player1.renderHP(player1.elHP());
                renderLogs(generateLogs('hit',player2,player1,valueEnemy));
            } else {
                renderLogs(generateLogs('defence',player2,player1));
            }
            showReesult();
        
        })
        

            };
        }
           

    
            