const start = document.querySelector(".start");
var power = document.querySelector("#power");
var strict = document.querySelector("#strict");
let count = document.querySelector(".count");
let choises = document.querySelectorAll(".box");
let green = document.querySelector("#green");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let blue = document.querySelector("#blue");



let output = ['blue','red','red','yellow','green','blue','blue','yellow','red','green'];

const check=()=>{
    let arr = [];
    for(i=0;i<number;i++){
        arr.push(output[i]); 
    }
    console.log(arr); 
    return arr;        
}
let ans = 0;
const compare=(arr,newArr)=>{
    if(arr.toString() === newArr.toString()){
        count.innerHTML = ans+1;
        // console.log(ans);
        // console.log('yes');
        ans++;
        // console.log(ans);
    }else{
        count.innerHTML = ans;
        // console.log("no");
        // console.log(ans);
    }
}

// const myInterval = ()=>{
//     const interval = setInterval(()=>{
        
                    
//     },2000);
// }

// function compSeq(){
//     return new Promise((resolve,reject)=>{
//         let arr1 = check();
//         let newArr = [];
//         choises.forEach((choise)=>{
//             choise.addEventListener("click",()=>{
//                 console.log(choise.dataset.id);
//                 return newArr.push(choise.dataset.id); 
//             })
//         })
//         setTimeout(()=>{
//             console.log(newArr);
//             compare(arr1,newArr);
//         },2000)
//         number++;
//         console.log(number);
//     })
// }

// console.log(choise.dataset.id);
//             newArr.push(choise.dataset.id);
//             console.log(newArr);
//             compare(arr1,newArr);
//             number++;
//             console.log(number);
//             game();

// setTimeout(()=>{
//     console.log(newArr);
//     compare(arr1,newArr);
//     game();
// },10000)

const clicked = (arr1,newArr)=>{
    // count++;  
    // console.log(arr1);
    // console.log(newArr);
    // console.log(count);
    if(arr1.length === newArr.length){
        console.log(newArr);
        // console.log(arr1);
        compare(arr1,newArr);
        game();
    }
}


const input =(newArr,arr1,counter)=>{
    
    if(counter<output.length+1){
        // console.log(counter);
        
        green.addEventListener("click",()=>{
            newArr.push("green");
            clicked(arr1,newArr);
            
        });
        red.addEventListener("click",()=>{
            newArr.push("red");
            clicked(arr1,newArr);
        });
        yellow.addEventListener("click",()=>{
            newArr.push("yellow");
            clicked(arr1,newArr);
        });
        blue.addEventListener("click",()=>{
            newArr.push("blue");
            clicked(arr1,newArr);
        });

    }else{
        console.log("end");
    }  
}

function getData(arr,i){
    return new Promise((resolve,reject)=>{
        // console.log(arr);
        let str = arr[i];
        let element = document.getElementById(str);
        element.style.backgroundColor = "white";
        setTimeout(()=>{
            element.style.backgroundColor = str;
        },500);
    })
}

const question = (arr)=>{
   let i=0;
   if(i<arr.length && arr.length<=output.length){
    let myInterval = setInterval(()=>{
        (async function(){
            await getData(arr,i);
        })();
        i++;
        if(i>=arr.length){
            clearInterval(myInterval);
        }
        },1000);
   }else{
    console.log("end2");
   }
   console.log(i);
}


let counter = 0;
let number = 1;
let newArr = [];
const game =()=>{
    if(power.checked == true){
        if(strict.checked == true){
            console.log("power-strict");
        }else{
            console.log("power-nonstrict");
            // (async function(){
            //     await compSeq();
            // })();
            let arr1 = check();
            question(arr1);
            number++;
            counter++;
            // console.log(counter);
            newArr = [];
            // let count=0;
            input(newArr,arr1,counter);
            
            
           
            
        }
    }else{
        console.log("non-power");
    }
    
}



// game();

start.addEventListener("click",()=>{
    game();
})