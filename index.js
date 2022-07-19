const toggleBtn = document.querySelector(".first-content__btn");
const contact = document.querySelector(".modal-window");
const toggleClose = document.querySelector(".bg");
const modalWindow = document.querySelector(".modal-window_content");
const body = document.querySelector('body')

toggleBtn.addEventListener("click", () => {
    contact.style.display = "block";
    window.scroll({ top: 0, left: 0 });
    document.body.style.overflow = "hidden";
    document.body.style.height = "110vh"; 
});
window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        contact.style.display = "none";
        window.scroll({ top: 0, left: 0 });
    }
});
toggleClose.addEventListener("click", () => {
    contact.style.display = "none";
    window.scroll({ top: 0, left: 0 });
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
});
modalWindow.addEventListener("click", () => {
    contact.style.display = "block";
    window.scroll({ top: 0, left: 0 });
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
});

const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputName = e.target[0].value,
        inputEmail = e.target[1].value,
        textarea = e.target[2].value;
    const form = {
        name: " ",
        email: " ",
        textarea: " ",
    };
    form.name = inputName;
    form.email = inputEmail;
    form.textarea = textarea;
    console.log(form);

    e.target.reset();
});

const modal = document.getElementById("myModal");
const clicked = document.getElementsByClassName("img-wrap");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBg = document.querySelector("#modal-bg");
const images = document.getElementsByClassName("myImages");
const imgBg = document.getElementsByClassName("img-description");


for (let i = 0; i < clicked.length; i++) {
    let img = clicked[i];
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.children[0].src;
        imgBg.style.opacity = 0;
    };
}

let closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
    modal.style.display = "none";
};
closeBg.onclick = function () {
    modal.style.display = "none";
};
modalImg.onclick = function () {
    modal.style.display = "block";
};
window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        modal.style.display = "none";
        window.scroll({ top: 500, left: 0 });
    }
});
