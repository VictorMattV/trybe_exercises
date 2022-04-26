//alterar cor de fundo da tela
let button = document.querySelector('#changeBgColor');
button.addEventListener("click", myFunction);

function myFunction() {
    let modifiedBg = document.querySelector('body');
    modifiedBg.style.backgroundColor = 'blue';
};

//altear cor do texto
let button2 = document.querySelector('#changeFontColor');
button2.addEventListener("click", myfunction2);

function myfunction2() {
    let modifiedFont = document.querySelector('p');
    modifiedFont.style.color = 'magenta';

};


//alterar tamanho da fonte
let button3 = document.querySelector('#changeFontSize');
button3.addEventListener("click", myfunction3);

function myfunction3() {
    let modifiedFontSize = document.querySelector('p');
    modifiedFontSize.style.fontSize = '40px';

};

//alterar espaçamento entre linhas de texto



//alterar tipo da fonte (Font-family)