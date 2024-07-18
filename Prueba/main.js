let sound = new Audio('audio.mp3');

playBtn.addEventListener('click', ()=>{
    sound.play();
});

pauseBtn.addEventListener('click', ()=>{
    sound.pause();
});


let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.body.innerHTML += arrFromStr[i];
        i++;

        if (i === arrFromStr.length -1) {
            clearInterval(printStr);
            document.body.style.color = 'steelblue'
        }
    },500);
};

writing('Bienvenidos a escuela Digital ');