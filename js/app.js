const game = new Game();
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', () => {
game.startGame();
});

//add functionality when clicking game characters
const keys = document.getElementsByClassName('key');
 for (let i = 0; i < keys.length; i ++) {
    keys[i].addEventListener("click", (event) => {
  game.handleInteraction(event.target);
  console.log(event.target);
    });
}; 

//add keydown functionality so users can use their keyboard
const overlay = document.getElementById("overlay");
document.addEventListener('keydown', (e) => {
  //if the overlay is not showing
  if (overlay.style.display === 'none') {
      for (let i = 0; i < keys.length; i++) {
        //if the key pressed matches an onscreen character
          if (e.key === keys[i].textContent ) {
            //call handleInteraction on that key
              game.handleInteraction(keys[i])
          }
      }
  }
})
