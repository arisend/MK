

import { getRandom,createElement,renderLogs,enemyAttack,playerAttack,getPlayers,startGame,nextTurn,gameTurn,createReloadButton,appendReloadB,playerWins,generateLogs,showReesult } from '../../utils/index.js';
import {Player} from '../../Player/index.js';
import { ATTACK, HIT, LOGS } from '../../constants/index.js';


export class Game {
    constructor(){
        
        }

        


        start = () => {
            let player1;
            let player2;

            startGame().then(({p1,p2}) => {
                //console.log(value);
                player1 = new Player({
                    ...p1,
                    player:1,
                    rootSelector: 'arenas',
                });
                
                player2 = new Player ({
                    ...p2,
                    player:2,
                    rootSelector: 'arenas',
                });
                
                //game
                player1.createPlayer();
                player2.createPlayer();
                renderLogs(generateLogs('start',player1,player2));
                
                const $formFight=document.querySelector(".control");
                const $arenas=document.querySelector(".arenas");
                
                $formFight.addEventListener('submit',function(e){
                    e.preventDefault();
                    //console.dir($formFight);



                    //const {hit:hitEnemy,defence:defenceEnemy,value:valueEnemy} = enemyAttack();
                    const {hit,defence,value,elHP} = playerAttack();
                    nextTurn({hit: hit, defence: defence}).then((object) => {
                        //console.log(value.player2)
                        const {hit:hitEnemy,defence:defenceEnemy,value:valueEnemy} = object.player2;
                        console.log(hitEnemy,defenceEnemy,valueEnemy)
                        console.log(hit,defence,value)
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
                        showReesult(player1,player2);
                        // expected output: "foo"
                      });
                    
                    
                    
        
        })



              });
           // gameTurn({hit: 'foot', defence: 'head'});
           
            
            
            


            
        
        
        
        
        
        
        

            };
        }
           

    
            