const compChoiceDisplay = document.querySelector(".compChoice");
const userChoiceDisplay = document . querySelector(".yourChoice");
const resultDisplay = document.querySelector(".result");
const userChoiceBtn = document.querySelectorAll(".choice")
const clearBtn = document.querySelector(".clear");

let computerChoice;
let userChoice;



user()

function computer() {
    let choices = ["Rock","Paper","Scissors"];
    randNum = Math.floor(Math.random()*choices.length)+1;

    switch(randNum){
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;       
    }
   
   
    
}

function user (){
    userChoiceBtn.forEach(button=>{
        button.addEventListener("click",()=>{
            userChoice = button.textContent;
            console.log(userChoice);
            computer()
            userChoiceDisplay.textContent =`you :${userChoice}` ;
            compChoiceDisplay.textContent = `computer :${computerChoice}`;
            resultDisplay .textContent = checkWinner()
        })
    })

    

}



function checkWinner(){
    if(computerChoice === userChoice){
        return "Draw!"
    }
    else if (computerChoice ==="Rock"){
     return(userChoice === "Paper")?  "you win":"you lose"

    }
    else if (computerChoice ==="Paper"){
        return(userChoice === "Scissors")?  "you win":"you lose"
    }
    else if (computerChoice ==="Scissors"){
        return(userChoice === "Rock")?  "you win":"you lose"}
       
   
}

clearBtn.addEventListener("click",()=>{
    userChoiceDisplay.textContent ="";
    compChoiceDisplay.textContent ="";
    resultDisplay .textContent = " "

})
  






//let userChoice;

/* rockChoice =document.getElementById("rock")

rockChoice.addEventListener("click",()=>{
     userChoice = rockChoice.textContent ;
    console.log("rock clicked")
})*/
