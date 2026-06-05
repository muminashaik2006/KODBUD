const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop =
        section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.classList.add("show");

        }

    });

});

const text =
"AIML Student | Web Developer | ML Enthusiast";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typingEffect,80);

    }

}

window.onload = typingEffect;