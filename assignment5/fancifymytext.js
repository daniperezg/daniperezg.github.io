function buttonAlert(){
   /* var button = document.querySelector('button');

    button.addEventListener('click', function() {
        alert("Hello World!");
    });*/
    alert("Hello World!");
}

function makeBigger() {
    document.getElementById("textBox").style.fontSize = "24pt";
}

function makeFancy() {
    var textArea = document.getElementById("textBox");

    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue"; 
    textArea.style.textDecoration = "underline"; 

    var boringRadio = document.getElementById('boring');
    boringRadio.addEventListener('change', makeBoring);
}

function makeBoring() {
    var textArea = document.getElementById("textBox");

    textArea.style.fontWeight = '';
    textArea.style.color = ''; 
    textArea.style.textDecoration = ''; 
}

function uppercaseText() {
    var textArea = document.getElementById("textBox");

    textArea.value.toUpperCase();


    let str1 = textArea.value.split(".");
    let str2 = str1.join("-Moo ");
    textArea.value = str2;
}

document.addEventListener('DOMContentLoaded', function() {
    var fancyRadio = document.getElementById('fancy');
    
    fancyRadio.addEventListener('change', makeFancy);
});