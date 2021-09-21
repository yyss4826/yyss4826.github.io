window.onload = (event) => {
let result = prompt("Enter Your Name","");
console.log(document.getElementById("enter-name"))
document.getElementById("enter-name").innerText = `Hello, ${result}, this is my movie`;
};

