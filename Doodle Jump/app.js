document.addEventListener("DOMContentLoaded",()=>{
    const grid = document.querySelector('.grid');
    const doodler = document.createElement('div');
    
    let doodlerLeftSpace = 50;
    let startPoint = 115;
    let doodlerBottomSpace = startPoint;
    let platformBottomSpace = 85;
    let isGameOver = false;
    let platformCount = 5;
    let platforms =[];
    let doodlerUpTime;
    let doodlerDownTime;
    let isJumping = true;
    let isGoingLeft = false;
    let isGoingRight = false;
    let leftTimmerId;
    let rightTimmerId;
    let score =0;

    const CreateDoodler =()=>{
        grid.appendChild(doodler);
        doodler.classList.add('doodler');
        doodlerLeftSpace = platforms[0].left;
        doodler.style.left = doodlerLeftSpace + 'px';
        doodler.style.bottom = doodlerBottomSpace + 'px';
    }

    // const CreatPlatform =()=>{let j=0;
    //     for(i=0;i<platformCount;i++){
    //         const platform = document.createElement('div');
    //         j++;
    //         console.log(j);
    //         grid.appendChild(platform);
    //         platform.classList.add('platform');
    //         platform.style.left = Math.random()*230 + 'px';
    //         platform.style.bottom = platformBottomSpace*j +'px';
            
    //         console.log(j);
    //     }
    //     console.log(j);
    // }

    class Platform{
        constructor(newPlatBottom){
            this.left = Math.random()*230;
            this.bottom = newPlatBottom;
            this.visual = document.createElement("div");

            let visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = this.left +'px';
            visual.style.bottom = this.bottom +'px';
            grid.appendChild(visual);
        }
    }

    const CreatPlatform =()=>{
        for(i=0; i<platformCount; i++){
            let platGap = 600 / platformCount;
            let newPlatBottom = 100 + i*platGap;
            let newPlatform = new Platform(newPlatBottom);
            platforms.push(newPlatform);
            console.log(platforms);

        }
    }

    const movePlatforms =()=>{
        if(doodlerBottomSpace > 200){
            platforms.forEach((platform)=>{
                platform.bottom -= 4;
                let visual = platform.visual;
                visual.style.bottom = platform.bottom +'px';

                if(platform.bottom < 10){
                    let firstPlatform = platforms[0].visual;
                    firstPlatform.classList.remove('platform');
                    platforms.shift();
                    score++;
                    console.log(platforms);
                    let newPlatform = new Platform(600);
                    platforms.push(newPlatform);
                }
            })
        }
    }
    
    const jump =()=>{console.log("jump again");
        clearInterval(doodlerDownTime);
        isJumping = true;
        doodlerUpTime = setInterval(()=>{
            doodlerBottomSpace += 5;
            doodler.style.bottom = doodlerBottomSpace +'px';
            if(doodlerBottomSpace > startPoint+200){
                down();
            }
        },30);

        
    }
    
    const down =()=>{console.log("down");
        clearInterval(doodlerUpTime);
        isJumping = false;
        doodlerDownTime = setInterval(()=>{
            
            doodlerBottomSpace -= 5;
            doodler.style.bottom = doodlerBottomSpace +'px';
            if(doodlerBottomSpace <= 0){
                gameOver();
            }
            platforms.forEach((platform)=>{
                if(
                    (doodlerBottomSpace <= (platform.bottom +15))&&
                    (doodlerBottomSpace >= platform.bottom)&&
                    ((doodlerLeftSpace +25) >= platform.left)&&
                    (doodlerLeftSpace <= (platform.left+65))&&
                    !isJumping
                    
                  ){console.log("landed");
                    startPoint = doodlerBottomSpace;
                    jump();
                }
            })
        },30)
    }

    const gameOver =()=>{
        clearInterval(doodlerDownTime);
        clearInterval(doodlerUpTime);
        clearInterval(leftTimmerId);
        clearInterval(rightTimmerId);
        isGameOver = true;
        console.log("game over");
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }
        grid.innerHTML = score;
    }

    const control =(e)=>{
        if(e.key === "ArrowLeft"){
            moveLeft();
        }else if(e.key === "ArrowRight"){
            moveRight();
        }else if(e.key === "ArrowUp"){
            moveStraight();
        }
    }


    const moveLeft =()=>{
        if(isGoingRight){
            clearInterval(rightTimmerId);
            isGoingRight = false;
        }
        isGoingLeft = true;
        leftTimmerId = setInterval(()=>{
            if(doodlerLeftSpace >=0){
                doodlerLeftSpace -= 5;
                doodler.style.left = doodlerLeftSpace+'px';
            }else{
                moveRight();
            }
        },30);
    }

    const moveRight =()=>{
        if(isGoingLeft){
            clearInterval(leftTimmerId);
            isGoingLeft = false;
        }
        isGoingRight = true;
        rightTimmerId = setInterval(()=>{
            if(doodlerLeftSpace  <= 275){
                doodlerLeftSpace += 5;
                doodler.style.left = doodlerLeftSpace +'px';
            }else{
                moveLeft();
            }
        },30);
    }

    const moveStraight =()=>{
        isGoingLeft = false;
        isGoingRight = false;
        clearInterval(leftTimmerId);
        clearInterval(rightTimmerId);
    }

    const start =()=>{
        if(!isGameOver){
            CreatPlatform();
            CreateDoodler();
            setInterval(movePlatforms,100);
            jump();
            document.addEventListener('keyup',control);
        }
    }

    start();

})