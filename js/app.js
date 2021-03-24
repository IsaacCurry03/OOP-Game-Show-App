/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlay = document.getElementById('overlay') ;
const gamereset = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');


let game = new Game();

const resetDisplay = () =>{
overlay.className = 'start';
overlay.style.display = 'none';
};

const markButton = (button) =>{
button.disabled=true;
// calls out the game 
game.handleInteraction(button);
};

gamereset.addEventListener('click', ()=>{
resetDisplay();
game=new Game();
game.startGame();
});
// basically activates the buttons on the keyboard
qwerty.addEventListener('click',(event)=>{
    if (event.target.className==='key'){
        markButton(event.target);
    }
    

    
});