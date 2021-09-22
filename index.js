/* this is small but I put a lot of effort in it to work*/
/* this is interactivity that asks you to submit your name*/

window.onload = (event) => {
let result = prompt("Enter Your Name","");
console.log(document.getElementById("enter-name"))
document.getElementById("enter-name").innerText = `Hello, ${result}, this is my movie`;
};

