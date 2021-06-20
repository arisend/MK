
import { createElement } from '../../utils/index.js';
export class Player {
    constructor(props){
        this.name=props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.player = props.player;
        this.selector = `player${this.player}`;
        this.rootSelector =props.rootSelector;
        }
    changeHP = (qty) => {
            //console.log(qty);
            this.hp -= qty;
            if (this.hp<0){
                this.hp=0
            };
        }
    elHP = () => {
            const $playerLife = document.querySelector(`.${this.selector} .life`);
            
            return $playerLife
        }
    renderHP = (object) => {
            this.elHP().style.width = this.hp + '%';
        }

    createPlayer= () => {
            const $player = createElement('div',this.selector);
            const $progressbar = createElement('div',"progressbar");
            const $character = createElement('div',"character");
            const $life = createElement('div','life');
            const $name = createElement('div',"name");
            const $img = createElement('img');
            $life.style.width=this.hp + "%";
            $life.style.color = "red";
        
        
        
            $name.innerText=this.name;
            $name.classList.add()
            $progressbar.appendChild($life);
            $progressbar.appendChild($name);
        
            $img.src = this.img;
            $character.appendChild($img);
            $player.appendChild($progressbar);
            $player.appendChild($character);
            const $root = document.querySelector(`.${this.rootSelector}`);
            $root.appendChild($player);
            return $player
        
        };
    
            
}

