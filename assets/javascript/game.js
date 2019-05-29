//You will be given a random number at the start of the game.
//declare function that creates a random number
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var wins = 0;
var losses = 0;
var score = 0;
var randomNum = getRandomInt(19,120);

//display number
$("#randomNumber").text(randomNum);

//display wins
$("#wins").text(" " + wins)
//display losses
$("#losses").text(" " + losses)

//There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.
//declaring random number for each crystal button
for(var i = 0; i < $(".crystal").length;i++){
    var crystalVal = getRandomInt(1,12);
    $("#crystal-"+i).val(crystalVal);
}

//reset game function
function resetGame() {
    randomNum = getRandomInt(19,120);
    $("#randomNumber").text(randomNum);
    score = 0;
    $("#totalScore").text(score);

    for(var i = 0; i < $(".crystal").length;i++){
        var crystalVal = getRandomInt(1,12);
        $("#crystal-"+i).val(crystalVal);
    }    
}


//clicking on gems
$(".crystal").on("click", function(){
    $("#totalScore").text("");
    //get value from gem
    var crystalTotal = parseInt($(this).val());
    //add score plus crystalTotal
    score += crystalTotal;
    $("#totalScore").text(score);
    console.log(crystalTotal);

    if(score === randomNum){
        // alert("You win!");
        wins++;
        $("#wins").text(" " + wins)
        resetGame();
    }
    else if(score > randomNum){
        // alert("You lose!");
        losses++;
        $("#losses").text(" " + losses)
        resetGame();
    }
});