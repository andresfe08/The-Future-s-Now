let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        document.body.h1 += arrFromStr[i];
        i++;

        if (i === arrFromStr.length -1) {
            clearInterval(printStr);
        }
    },500);
};

writing('Bienvenidos a escuela Digital ');