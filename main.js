let pugphoto = 0;

function movePug(){
    var app = document.getElementsByClassName('pugphoto');

    if(pugphoto == 100){
        pugphoto = 0;
    }

    for(let i = 0; i < app.length; i++){
        app[i].style.left = pugphoto + '%';
        console.log(pugphoto);
    }
    pugphoto++;
}