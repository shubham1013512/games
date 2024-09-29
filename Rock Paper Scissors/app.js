let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissors");
let contents = document.querySelectorAll(".content");
let you = document.querySelector(".you");
let comp = document.querySelector(".comp");
let msg = document.querySelector(".msg");


// contents.forEach((content)=>{
//     content.addEventListener("click",()=>{
//         let number = Math.floor(Math.random()*3);
//         if(content.dataset.id === "rock"){you.innerText = "Rock";
//             if(number === 0){
//                 comp.innerText = "Rock";
//                 msg.innerText = "Its a Draw!";

//             }else if(number === 1){
//                 comp.innerText = "Paper";
//                 msg.innerText = "Comp wins!";
//             }else{
//                 comp.innerText = "Scissor";
//                 msg.innerText = "You wins!";
//             }
//         }else if(content.dataset.id === "paper"){you.innerText = "Paper";
//             if(number === 0){
//                 comp.innerText = "Rock";
//                 msg.innerText = "You wins!";
//             }else if(number === 1){
//                 comp.innerText = "Paper";
//                 msg.innerText = "Its a Draw!";
//             }else{
//                 comp.innerText = "Scissor";
//                 msg.innerText = "Comp wins!";
//             }
//         }else{you.innerText = "Scissor";
//             if(number === 0){
//                 comp.innerText = "Rock";
//                 msg.innerText = "Comp wins!";
//             }else if(number === 1){
//                 comp.innerText = "Paper";
//                 msg.innerText = "You wins!";
//             }else{
//                 comp.innerText = "Scissor";
//                 msg.innerText = "Its a Draw!";
//             }
//         }
//     })
// })

const genCompChoise = () =>{
    let choises = ["Rock","Paper","Scissor"];
    let randIdx = Math.floor(Math.random()*3);
    // console.log(choises[randIdx]);
    return choises[randIdx];
}

contents.forEach((content)=>{
    content.addEventListener("click",()=>{
        genCompChoise();
        console.log(genCompChoise());
    })
})