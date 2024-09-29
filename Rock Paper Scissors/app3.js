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
const win=(userChoise,compChoise)=>{
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoise}${smallUserWord} beats ${compChoise}${smallCompWord}. You wins!`;
}

const lose=(userChoise,compChoise)=>{
    compScore++;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoise}${smallUserWord} loses to ${compChoise}${smallCompWord}. You lose!`;
}

const draw=(userChoise,compChoise)=>{
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${userChoise}${smallUserWord} equals ${compChoise}${smallCompWord}. Its a draw!`;
}

const game =(userChoise)=>{
    let compChoise = genCompChoise();
    switch(userChoise+"-"+compChoise){
        case "rock-scissor":
        case "paper-rock":
        case "scissor-paper":
            win(userChoise,compChoise);
            break;
        case "rock-paper":
        case "paper-scissor":
        case "scissor-rock":
            lose(userChoise,compChoise);
            break;
        case "rock-rock":
        case "paper-paper":
        case "scissor-scissor":
            draw(userChoise,compChoise);
            break;

    }
}

rock_div.addEventListener("click",()=>{
    game("rock");
})

paper_div.addEventListener("click",()=>{
    game("paper");
})

scissor_div.addEventListener("click",()=>{
    game("scissor");
})