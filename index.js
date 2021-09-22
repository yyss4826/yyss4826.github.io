window.onload = (event) => {
let result = prompt("Enter Your Name","");
console.log(document.getElementById("enter-name"))
document.getElementById("enter-name").innerText = `Hello, ${result}, this is my movie`;
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click' , () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
};

