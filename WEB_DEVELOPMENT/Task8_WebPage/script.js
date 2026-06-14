function openScene(id){

document.getElementById("modal").style.display="block";

document.querySelectorAll(".content").forEach(scene=>{
scene.style.display="none";
});

document.getElementById(id).style.display="block";

if(id==="mountain"){
snow();
}

if(id==="desert"){
sand();
}

if(id==="forest"){
leaves();
}
}

function closeScene(){
document.getElementById("modal").style.display="none";
}

function snow(){

let container=document.querySelector(".snow-container");
container.innerHTML="";

for(let i=0;i<60;i++){

let flake=document.createElement("div");

flake.className="snow";
flake.innerHTML="❄";

flake.style.left=Math.random()*100+"%";
flake.style.animationDuration=
(3+Math.random()*5)+"s";

container.appendChild(flake);
}
}

function sand(){

let container=document.querySelector(".sand-container");
container.innerHTML="";

for(let i=0;i<100;i++){

let grain=document.createElement("div");

grain.className="sand";

grain.style.top=Math.random()*100+"%";
grain.style.animationDuration=
(2+Math.random()*4)+"s";

container.appendChild(grain);
}
}

function leaves(){

let container=document.querySelector(".leaf-container");
container.innerHTML="";

for(let i=0;i<40;i++){

let leaf=document.createElement("div");

leaf.className="leaf";
leaf.innerHTML="🍃";

leaf.style.left=Math.random()*100+"%";
leaf.style.animationDuration=
(4+Math.random()*5)+"s";

container.appendChild(leaf);
}
}