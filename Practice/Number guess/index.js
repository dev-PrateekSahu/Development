// generating random number
const randomNumber = Math.floor((Math.random() * 100)+1);
console.log(randomNumber)

// checking Number
let prevGuesses = 0;
let remainingChances = 10;


function restartGame(){
    prevGuesses = 0;
    remainingChances = 10;
    randomNumber = Math.floor((Math.random() * 100)+1);
    setInterval(()=>{
        $("#restarted").text("Game has been restarted");

    },100);

    clearInterval(()=>{
        $("#restarted").text("");

    },10000);
}

  $("#subt").on("click",()=>{
    const guessedNumber = parseInt($("#guessField").val());
    let possible = Number.isInteger(guessedNumber);
    console.log(guessedNumber);
    if(possible){
        prevGuesses++;
        remainingChances--;
        if(randomNumber === guessedNumber){
            $(".lowOrHi").text("Woww, You have guessed the number 🎉🎊");
            restartGame();
            return;
        }else if(guessedNumber > randomNumber){
            $(".lowOrHi").text("Low");
        }else{
            $(".lowOrHi").text("High");
        }
    }else{
        $(".lowOrHi").text("Invalid Number");
    }
    if(remainingChances===0){
        $(".lowOrHi").text("Out of chances....");
        restartGame();
        return;
    }
    
    $(".guesses").text(prevGuesses);
    $(".lastResult").text(remainingChances)
    $("#guessField").val("")
    
  })