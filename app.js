let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
let header = document.querySelector('header');
let footer = document.querySelector('footer');

let logo = document.querySelector('.logo');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');
let button5 = document.querySelector('.button5');

let content0 = document.querySelector('.content0');
let content1 = document.querySelector('.content1');
let content2 = document.querySelector('.content2');
let content3 = document.querySelector('.content3');
let content4 = document.querySelector('.content4');
let content5 = document.querySelector('.content5');

menuToggle.onclick = function(){
    header.classList.toggle('open');
}

logo.onclick = function(){
    content0.classList.add('active');
    content1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content5.classList.remove('active');

    button1.classList.remove('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    button5.classList.remove('active');

    header.classList.remove('open');
    footer.classList.remove('active');
}

button1.onclick = function(){
    content0.classList.remove('active');
    content1.classList.add('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content5.classList.remove('active');
    
    button1.classList.add('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    button5.classList.remove('active');

    header.classList.remove('open');
    footer.classList.add('active');
}

button2.onclick = function(){
    content0.classList.remove('active');
    content1.classList.remove('active');
    content2.classList.add('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content5.classList.remove('active');

    button1.classList.remove('active');
    button2.classList.add('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    button5.classList.remove('active');

    header.classList.remove('open');
    footer.classList.add('active');
}

button3.onclick = function(){
    content0.classList.remove('active');
    content1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.add('active');
    content4.classList.remove('active');
    content5.classList.remove('active');
    
    button1.classList.remove('active');
    button2.classList.remove('active');
    button3.classList.add('active');
    button4.classList.remove('active');
    button5.classList.remove('active');
    
    header.classList.remove('open');
    footer.classList.add('active');
}

button4.onclick = function(){
    content0.classList.remove('active');
    content1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.add('active');
    content5.classList.remove('active');
    
    button1.classList.remove('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.add('active');
    button5.classList.remove('active');
    
    header.classList.remove('open');
    footer.classList.add('active');
}

button5.onclick = function(){
    content0.classList.remove('active');
    content1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content5.classList.add('active');
    
    button1.classList.remove('active');
    button2.classList.remove('active');
    button3.classList.remove('active');
    button4.classList.remove('active');
    button5.classList.add('active');
    
    header.classList.remove('open');
    footer.classList.add('active');
}