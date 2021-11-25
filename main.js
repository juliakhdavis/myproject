/*function input()
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
            
                // checking duplicates
                let isInList = false;
                for ( let y = 0; y < groceryArray.length; y = y + 1){
            
                    if(answer == groceryArray[y]){
                        console.log("you have already entered this item ");
                        isInList = true;
                    }  
                }

                if(isInList == false && answer != "remove" && answer != "exit"){
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
    

        if(addorremove == "print"){
            console.log("here is your temporary list");
            console.log(groceryArray);
        }

        if(addorremove == "exit"){
            i = 100;
        }
    }
    console.log("This is your grocery list");
    console.log(groceryArray);
}
*/


/*function christmasGifts(){

    const prompt = require("prompt-sync")();
    let donationArray = [];
    let duplicateArray = [];
    let masterLoop = true;
    let userLoop = true;
    let adminLoop = true;
    console.log("Christmas Donations");

    while (masterLoop == true){
        let userOrAdmin = prompt("Are you a user or an admin? ");

        if(userOrAdmin == "exit"){
            masterLoop = false;
        }

       checkUser(userOrAdmin, userLoop, prompt, donationArray, duplicateArray);
        
       checkAdmin(userOrAdmin, adminLoop, prompt, donationArray, duplicateArray);
        
    }
}

christmasGifts();

function checkUser(input, prompt, userLoop,  donationArray, duplicateArray){
    if(input == "user"){
        console.log("Hello user! Please add donation item or type exit to exit list. ");
        console.log(prompt);

        while(prompt == true){
            
            let answer = userLoop("add next item ");
    
            if(answer == "exit"){
                prompt = false;
                input = answer;
            }
    
            let inList = false;
            for ( let y = 0; y < donationArray.length; y = y + 1){
                if(answer == donationArray[y]){
                    console.log("repeated item moved to second list ");
                    inList = true;
                    duplicateArray.push(answer);
                }  
            }
    
            if(inList == false && answer != "exit"){
                donationArray.push(answer);
            } 
    
        }    
    }
}

function checkAdmin(userOrAdmin, adminLoop, prompt, donationArray, duplicateArray){

    if(userOrAdmin == "admin"){
        console.log("Hello admin! Type remove to remove item, print to show donation items, or exit to exit list. ");
        adminLoop = true;
    
        while(adminLoop == true){
            let answer = prompt("What would you like to do today? ");
    
            if( answer == "exit" || answer == "print" || answer == "remove"){
                adminLoop = false;
                userOrAdmin = answer;
    
                if(userOrAdmin == "remove"){
                let removeItem = prompt("enter item to remove ");
                console.log(donationArray);
                    for( let r = 0; r < donationArray.length; r = r + 1){
    
                        if(removeItem == donationArray[r]){
                            donationArray.splice(r,1);
                            console.log("item removed ");
                        }
                    }
                }
    
                if(userOrAdmin == "print"){
                    console.log("Here is your donation list. ");
                    console.log(donationArray);
                    console.log("Here is your second donation list. ");
                    console.log(duplicateArray);
                }
    
                if(userOrAdmin == "exit"){
                    adminLoop = false;
                }
            }    
        }                      
    }
}
*/

/*function dogBreeds(){

    let iHaveAPug = [];
    let smallMoxie = [];
    let bigDogs = [];
    bigDogs.push("steven");
    smallMoxie.push("Gabriel");
    iHaveAPug.push("Julia");
    console.log(bigDogs +"\n"+ smallMoxie +"\n"+ iHaveAPug);
    dogsAreCool(bigDogs, smallMoxie, iHaveAPug);
    console.log(bigDogs +"\n"+ smallMoxie +"\n"+ iHaveAPug);
}
dogBreeds();

function dogsAreCool(anArray, anotherArray, thirdArray){

    const prompt = require("prompt-sync")();
        
        for( let y = 0; y < 5; y = y + 1){
            let puppies = prompt("what is your favorite dog ");
            anArray.push(puppies);
        }     
        console.log(anArray);
        console.log(anotherArray);
        console.log(thirdArray);
}*/

function piesAreGreat(){

    let pumpkinPie = [];
    let applePie = [];
    let pecanPie = [];
    pumpkinPie.push();
    applePie.push();
    pecanPie.push();
    piesAreGreat(pumpkinPie, applePie, pecanPie);
    console.log(pumpkinPie +"\n"+ applePie +"\n"+ pecanPie);

}
piesAreGreat();

function notAPie(myArray, yourArray, theirArray){

    const prompt = require("prompt-sync")();
    
        for( let a = 0; a < 5; a = a + 1){
            let turkey = prompt("Your favorite Thanksgiving food ");
            console.log(turkey);
        }
        console.log(myArray);
        console.log(yourArray);
        console.log(theirArray);
}