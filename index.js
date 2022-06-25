const toggleBtn = document.querySelector('.first-content__btn')
const contact = document.querySelector('.modal-window')
const toggleClose = document.querySelector('.bg')
const modalWindow = document.querySelector('.modal-window_content')

toggleBtn.addEventListener('click',() =>{
    contact.style.display = 'block';
    contact.style.position = 'fixed';
    window.scroll({top: 0, left: 0});
})
window.addEventListener('keydown',function(e) {
    if (e.keyCode === 27 ){
        contact.style.display = 'none';
        window.scroll({top: 0, left: 0});
    }
})
toggleClose.addEventListener('click',()=>{
    contact.style.display = 'none'
    window.scroll({top: 0, left: 0})
} )
modalWindow.addEventListener('click', ()=>{
    contact.style.display = 'block'
    window.scroll({top: 0, left: 0})
})

const form = document.querySelector('.form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[3].value);
    console.log(e);
})

const cards = [
    
]
const modal = document.getElementById('myModal');
const clicked = document.getElementsByClassName('img-wrap');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBg = document.querySelector('#modal-bg')
const images = document.getElementsByClassName('myImages');


for (let i = 0; i < images.length; i++) {
let img = images[i];
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}}


let closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function() {
    modal.style.display = "none";
}
closeBg.onclick = function() {
    modal.style.display = "none";
}
modalImg.onclick = function() {
    modal.style.display = "block";
}
