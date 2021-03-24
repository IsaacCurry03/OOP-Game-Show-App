class Game{
    constructor(){
        this.missed=0;//number of missed guesses
        this.phrases=[new Phrase("When nothing goes right go left"), new Phrase("Stay foolish to stay sane"), new Phrase("you win"),
        new Phrase("treehouse"), new Phrase("Never regret "), new Phrase("You can totally do this")];//an array of phrases to use with the game
    }
    getRandomPhrase(){
        const randomNum=Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomNum];
    }
    get randomPhrase(){
        // return Math.floor(Math.random()*this.phrases.length);
        return this._randomPhrase;
    }
    set randomPhrase(randomPhrase){
        this._randomPhrase=randomPhrase;
    }
    //this method checks to see if the button clicked by the player matches a letter in the phrase.
    handleInteraction(letter){
        
        if (this.randomPhrase.checkLetter(letter.textContent)){
            letter.className+= ' chosen';// make the background color of correct choice purple
            this.randomPhrase.showMatchedLetter(letter.textContent);
            this.checkForWin();
        } else{
            
            letter.className+=' wrong';
            this.removeLife();
        }
    }
    removeLife(){
        let heartImg=document.querySelectorAll('#scoreboard img');
        heartImg[this.missed].src="images/lostHeart.png";
        this.missed++;
        if (this.missed>=5){
            this.gameOver();
        }
    }

    //this method checks to see if the player has selected all of the letters.
    checkForWin(){
        const totalLetterLength= document.querySelectorAll('#phrase .letter-multiple').length+
            document.querySelectorAll('#phrase .letter').length;//
        const totalShownLength= document.querySelectorAll('#phrase .show').length;
        if (totalLetterLength===totalShownLength){
            this.gameOver();
        }
    }
    gameOver(){
        let message = document.querySelector('#game-over-message');
        let resetButton=document.querySelector('#btn__reset');
        let overlay=document.querySelector('#overlay');
        overlay.style.display='';
        if (this.missed<5){
            
            message.innerText= "You Win!";
            resetButton.innerText= "Play Again";
            overlay.className='win';//change the background color
        } else{
            //player lose
            message.innerText="You Lose!";
            resetButton.innerText= "Try Again";
            overlay.className='lose';
        }
        this.resetGame();

    }
    
    startGame(){
        const selectedPhrase=this.getRandomPhrase();
        this.randomPhrase=selectedPhrase;
        selectedPhrase.addPhraseToDisplay();
    }

    //reset the game function
    resetGame(){
      
        this.missed=0;

        let disabledButton= document.querySelectorAll('#qwerty button[disabled]');
        for (let i=0; i<disabledButton.length; i++){
            disabledButton[i].disabled=false;
            disabledButton[i].className='key';
        }
        // next, reset all lives
        document.querySelectorAll('#scoreboard img').forEach(item=>{item.src="images/liveHeart.png"});
    }
    

}