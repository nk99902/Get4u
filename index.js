const ob = [
    {
        src: "./img/logo.png",
        name: "Abhishek Kumar",
        text: "Lorem"
    },
    {
        src: "",
        name: "Ayush Jha",
        text: "Lorem"
    },

]

const image = document.querySelector("#image");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const Name = document.querySelector("#name");
const text = document.querySelector("#text");
let i = 0;

function changeContent(i) {
    image.src = ob[i].src;
    Name.textContent = ob[i].name;
    text.textContent = ob[i].text;
}

window.addEventListener("DOMContentLoaded", () => {
    Image.src = ob[i].src;
    Name.textContent = ob[i].name;
    text.textContent = ob[i].text;
})
left.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = ob.length - 1;
    }
    changeContent(i);
    console.log("left");
});


right.addEventListener('click', () => {
    i++;
    if (i > ob.length - 1) {
        i = 0;
    }
    changeContent(i);
})