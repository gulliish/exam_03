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