/*let derreklewis = 0;


function movePug(){
    var app = document.querySelector('.subtitle');
    
    app.style.left = derreklewis + '%';
    derreklewis = derreklewis+1;
    
} 
function moveLewis(){
    var app = document.querySelector('.derreklewis');

    app.style.top = derreklewis + '%';
    derreklewis = derreklewis+1;
    
}

function moveTitle(){
    console.log('Julias favorite fighter');

    
}
*/
function myLoop(){
    for( let unicorn = 5000; unicorn >= 0; unicorn=unicorn-100){
        console.log(unicorn);
       unicorn = -1;
       console.log(unicorn);
    };
}
function dataTypes(){
    let Pugnumber = 10;
    let stringviolin = "90";
    Pugnumber = Pugnumber + 1;
    stringviolin = stringviolin + 20;
    console.log(Pugnumber);
    console.log(stringviolin);
}
function main(){
    //myLoop();
   // dataTypes();
    //mushroom();
    input();
}

function mushroom(){
    let flowerArray = [];
    flowerArray.push("purple flower");
    flowerArray.push("pink flower");
    flowerArray.push("blue flower");
    console.log(flowerArray);
    flowerArray.pop();
    console.log(flowerArray);
    flowerArray.push("green flower");
    console.log(flowerArray);
    flowerArray.splice(0,2);
    console.log(flowerArray);
}

function input()
{
    const prompt = require("prompt-sync")();
    let groceryArray = [];
    console.log("welcome to your grocery list");

    for ( let i = 0; i < 100; i = i + 1){
        let addorremove = prompt("type add to add item and type remove to remove item and enter exit to stop ");

        if(addorremove == "add"){

            for( let a = 0; a < 100; a = a + 1){
                
                let answer = prompt("enter your next item ");

                if(answer == "exit"||  answer == "print"|| answer == "remove"){
                    a = 100;
                    addorremove = answer;
                } 
            
                let isInList = false;
                for ( let y = 0; y < groceryArray.length; y = y + 1){
            
                    if(answer == groceryArray[y]){
                        console.log("you have already entered this item ");
                        isInList = true;
                    }  
                }

                if(isInList == false){
                    groceryArray.push(answer);
                }   
            }
        }
        if(addorremove == "remove"){
            let itemToRemove = prompt("enter item to remove it ");

            for ( let r = 0; r < groceryArray.length; r = r + 1){

                if(itemToRemove == groceryArray[r]){
                    groceryArray.splice(r,1);
                    console.log("item has been removed");
        
                }
            }
        }
    }

        if(addorremove == "print"){
            console.log("here is your temporary list");
            console.log(groceryArray);
        }

        if(isInList == false && answer != "remove" && answer != "exit"){
            groceryArray.push(answer);

        }
        if(addorremove == "exit"){
            i = 100;
        }
        
}
    console.log("This is your grocery list");
    console.log(groceryArray);



main();