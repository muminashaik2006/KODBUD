const text = "AI & ML Enthusiast";

let i = 0;

function typingEffect(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typingEffect,100);

}

}
