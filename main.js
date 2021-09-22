let derreklewis = 0;


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
    var app = document.querySelector('.title');

    app.style.rotate = title + '%';
    title = title+1;
}