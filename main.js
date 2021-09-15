let derreklewis = 0;

function movePug(){
    var app = document.getElementsByClassName('pugphoto');

    if(derreklewis == 100){
        derreklewis = 0;
    }

    for(let i = 0; i < app.length; i++){
        app[i].style.left = derreklewis + '%';
        console.log(derreklewis);
    }
    derreklewis++;
}