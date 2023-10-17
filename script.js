 // Math.trunc(Math.random() * 20) + 1 to generate a random number between 1 and 20 is a valid approach as well. It will produce the same result as Math.floor(Math.random() * 20) + 1.
 
//  generate random num 1-20
let randomNum = (Math.trunc(Math.random() * 20)+1);
// accessing user input number by class guess in input field 
 let guess = document.querySelector('.guess').value;
//  getting game-container to change its bg color
 const gameContainer = document.getElementById("game-container");
//  class displaymessage is used to show different messages 
 let displaymessage = document.querySelector('.displaymessage');
//  accessing check btn by id check to disable after user guess
 const checkButton = document.getElementById("check");
 // generated random number
 console.log(randomNum);

//  initiall values
 let score = 20;
 let highscore = 0;
 let trials = 3; 
 

//  onclick function for check btn
 function check()
 {
      guess = Number(document.querySelector('.guess').value);
     

     // if guess is equal to the generated random number
     if( guess == randomNum)
     {
         displaymessage.textContent =  `😄Congratulations! You guessed it right. The number was ${randomNum}.`;
         // match number is equal to random number
         document.querySelector('.matchNumber').textContent = randomNum;
         // clear the guess number
         document.querySelector('.guess').value = '';
        //  change backgroundcolor if win
       // gameContainer.style.backgroundColor = '#2ecc71';
          document.body.style.backgroundColor = "rgb(108, 184, 159)";
        // guess.disabled = true;
        document.querySelector('.guess').disabled = true;
        checkButton.disabled = true;
        // check value of score on match bcz on every check click value of score dec
        // score is 20 n highscore is 0 initially
     if( score > highscore)
     {
        //assigning score value 20 to highscore in case user guess correct value
         highscore = score;
         document.querySelector('.highscore').textContent = highscore;
     }
 }
     else if( guess !== randomNum)
     {

         if( score > highscore )
         {

             if(guess > randomNum){
                 displaymessage.textContent = "📈 number is high";
             }
             else{
                 displaymessage.textContent = "📉 number is low"; 
             }

             score--;
             document.querySelector('.score').textContent = score; 
             
             trials--;
             console.log("this is trial",trials);

             if(trials===0)
             { 
                //displaymessage.textContent = "your trials are finished";
                displaymessage.textContent = `😄Out of trials. The number was ${randomNum}.`;
             document.querySelector('.guess').value = '';
             document.querySelector('.guess').disabled = true;
              document.querySelector('.matchNumber').textContent = "?";
              document.querySelector('.highscore').textContent = "20";
              document.querySelector('.score').textContent = "Your score is 0";
              console.log("this is trial",trials);
              checkButton.disabled = true;
                     
 
                 }
         }  
     } 
   
 }

 function again () 
 {
  randomNum = (Math.trunc(Math.random() * 20)+1);
 console.log(randomNum);
 score = 20;
  highscore = 0;
 trials = 3;
 displaymessage.textContent = "😄...start guessing"; 
 document.querySelector('.guess').value = '';
 document.querySelector('.matchNumber').textContent = "?";
 document.querySelector('.highscore').textContent = "0";
 document.querySelector('.score').textContent = "20";
 document.body.style.backgroundColor= " rgba(81, 99, 218, 0.886)";
 checkButton.disabled = false;
 document.querySelector('.guess').disabled = false;
 
}