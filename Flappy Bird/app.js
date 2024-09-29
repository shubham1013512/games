document.addEventListener("DOMContentLoaded",()=>{
    const grid = document.querySelector(".grid");
    const bird = document.createElement("div");
    // const topPole = document.createElement("div");
    // const bottomPole = document.createElement("div");

    let birdLeftSpace = 50;
    let birdBottomSpace = 200;
    // let topPoleLeftSpace = 150;
    // let topPoleTopSpace = 0;
    // let bottomPoleLeftSpace;
    // let bottomPoleBottomSpace = 0;
    let poleCount = 5;
    let topPoles =[];
    let bottomPoles = [];
    let score = 0;

    const creatBird =()=>{
        grid.appendChild(bird);
        bird.classList.add("bird");
        bird.style.left = birdLeftSpace +'px';
        bird.style.bottom = birdBottomSpace +'px';
    }


    class Pole{
        constructor(newLeftSpace,newTopSpace,newbottomSpace){
            this.left = newLeftSpace;
            this.top = newTopSpace;
            this.bottom = newbottomSpace;
            this.height = 125+Math.random()*100;
            this.visual = document.createElement('div');

            let visual = this.visual;
            visual.classList.add("pole");
            visual.style.left = this.left+'px';
            visual.style.top = this.top+'px';
            visual.style.bottom = this.bottom+'px';
            visual.style.height = this.height+'px';
            grid.appendChild(visual);
        }
    }

    const createTopPole =()=>{
        for(i=0; i<poleCount; i++){
            let poleGap = 1100 / poleCount;
            let newLeftSpace = 150 + i*poleGap;
            let newTopSpace = 0;
            let newbottomSpace;
            let newTopPole = new Pole(newLeftSpace,newTopSpace,newbottomSpace);
            topPoles.push(newTopPole);
            // let topPole = newTopPole;

            // topPole.style.top = newTopSpace+'px';
            console.log(topPoles);
            console.log(newTopPole.top);
        }
    }

    const createBottomPole =()=>{
        for(i=0; i<poleCount; i++){
            let poleGap = 1100 / poleCount;
            let newLeftSpace = 150 + i*poleGap;
            let newbottomSpace = 0;
            let newTopSpace;
            let newBottomPole = new Pole(newLeftSpace,newTopSpace,newbottomSpace);
            bottomPoles.push(newBottomPole);
            console.log(bottomPoles);
            console.log(newBottomPole.bottom);
        }
    }

    const gameStart =()=>{
        document.addEventListener("keyup",(e)=>{
            // console.log("start");
            if(e.key === 'ArrowRight'){
                play = setInterval(()=>{
                    movePoles(topPoles);
                    movePoles(bottomPoles);
                    creatDownBird();
                    
                },100)
            }else if(e.key === 'ArrowUp'){
                console.log("jump");
                creatBirdJump()
            }

        })
    }

    const movePoles=(poles)=>{
        console.log("start");
        poles.forEach((pole)=>{
            pole.left -= 4;
            let visual = pole.visual;
            visual.style.left = pole.left+'px';

            if(pole.left < 10){
                let firstPole = poles[0].visual;
                firstPole.classList.remove("pole");
                score++;
                poles.shift();
                let newbottomSpace = pole.bottom;
                let newTopSpace = pole.top;
                let newPole = new Pole(1100,newTopSpace,newbottomSpace);
                poles.push(newPole);
            }
        })
    }

    const creatDownBird =()=>{
        console.log('down');
        if(birdBottomSpace > 0){
            birdBottomSpace -=4;
            bird.style.bottom = birdBottomSpace+'px';
        }
        gameOver(topPoles);
        gameOver(bottomPoles);
    }

    const gameOver=(poles)=>{
        if(birdBottomSpace <= 0){
            console.log("game over");
            clearInterval(play);
            grid.innerHTML = score/2;
        }
        poles.forEach((pole)=>{
            if(
                (pole.left <= birdLeftSpace+30)&&
                ((pole.bottom+pole.height >= birdBottomSpace)||
                (500-(pole.top+pole.height) <= birdBottomSpace+50))
            ){console.log(birdBottomSpace);
                console.log(pole.top+pole.height);
                console.log(pole.height+pole.bottom);
                clearInterval(play);
                grid.innerHTML = score/2;
            }
        })
    }

    const creatBirdJump = ()=>{
        birdBottomSpace += 15;
        bird.style.bottom = birdBottomSpace+'px';
    }
    





    const start =()=>{
        creatBird();
        createTopPole();
        createBottomPole();
        gameStart();
    }
    start();

})