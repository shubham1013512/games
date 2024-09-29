let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector(".user-score");
const compScore_span = document.querySelector(".comp-score");
const result_div = document.querySelector(".result");
const rock_div = document.querySelector(".rock");
const paper_div = document.querySelector(".paper");
const scissor_div = document.querySelector(".scissors");

const genCompChoise = ()=>{
    let choises = ['rock','paper','scissor'];
    let randIdx = Math.floor(Math.random()*3);
    return choises[randIdx];
}
const score = (userScore,compScore)=>{
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

rock_div.addEventListener("click",()=>{
    let compChoise = genCompChoise();
    if(compChoise === "paper"){
        compScore++;
        result_div.innerHTML = "paper covers rock. you lose!";
    }else if(compChoise === "scissor"){
        userScore++;
        result_div.innerHTML = "rock beats scissor. you wins!";
    }else{
        result_div.innerHTML = "its a draw!";
    }
    score(userScore,compScore);
})

paper_div.addEventListener("click",()=>{
    let compChoise = genCompChoise();
    if(compChoise === "scissor"){
        compScore++;
        result_div.innerHTML = "scissor cuts paper. you lose!";
    }else if(compChoise === "rock"){
        userScore++;
        result_div.innerHTML = "paper covers rock. you wins!";
    }else{
        result_div.innerHTML = "its a draw!";
    }
    score(userScore,compScore);
})

scissor_div.addEventListener("click",()=>{
    let compChoise = genCompChoise();
    if(compChoise === "rock"){
        compScore++;
        result_div.innerHTML = "rock beats scissor. you lose!";
    }else if(compChoise === "paper"){
        userScore++;
        result_div.innerHTML = "scissor cuts paper. you wins!";
    }else{
        result_div.innerHTML = "its a draw!";
    }
    score(userScore,compScore);
})