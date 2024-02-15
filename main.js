let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
let color = "blue";
let largura = 2;

let mouseX;
let mouseY;
let mouseXfinal;
let mouseYfinal;
let evento = " ";

let touchX;
let touchY;
let touchXfinal;
let touchYfinal;

canvas.addEventListener("mousedown", cliquei);

function cliquei(e){
    color = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    evento = "mousedown";
}

canvas.addEventListener("mousemove", movimentei);

function movimentei(e){
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    if(evento=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=largura;
        ctx.moveTo(mouseX,mouseY);
        ctx.lineTo(mouseXfinal,mouseYfinal);
        ctx.stroke();
    }
    mouseXfinal=mouseX;
    mouseYfinal=mouseY;
}

canvas.addEventListener("mouseup", naocliquei);

function naocliquei(){
    evento = "mouseup";
}

function desenharcirculo(mouseX, mouseY){
    
}

function limpar(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

canvas.addEventListener("touchstart", encostei);

function encostei(e){
    color = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    evento = "touchstart";
}

canvas.addEventListener("touchmove", deslizei);

function deslizei(e){
    touchX = e.touches[0].clientX - canvas.offsetLeft;
    touchY = e.touches[0].clientY - canvas.offsetTop;
    if(evento=="touchstart"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=largura;
        ctx.moveTo(touchX,touchY);
        ctx.lineTo(touchXfinal,touchYfinal);
        ctx.stroke();
    }
    touchXfinal=touchX;
    touchYfinal=touchY;
}

canvas.addEventListener("touchend", parei);

function parei(){
    evento = "touchend";
}
