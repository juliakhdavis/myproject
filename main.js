let derreklewis = 0;

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function movePug(){
    var app = document.querySelector('.subtitle');
    console.log(app);
    if(derreklewis == 100){
        derreklewis = 0;
    }

    
        app.style.left = derreklewis + '%';
        console.log(derreklewis);
        derreklewis = derreklewis+1;
    
} 
function moveLewis(){
    var app = document.querySelector('.derreklewis');
    console.log(app);
    if(derreklewis == 100){
        derreklewis = 0;
    }

    
        app.style.top = derreklewis + '%';
        console.log(derreklewis);
        derreklewis = derreklewis+1;
    
} 