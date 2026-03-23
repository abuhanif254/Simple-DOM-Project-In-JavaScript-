const body = document.getElementById("body");
const button = document.querySelectorAll("li");
const redButton = document.querySelector(".red");
const greenButton = document.querySelector(".green")
const blueButton = document.querySelector(".blue");
const pinkButton = document.querySelector(".pink");

// console.log(redButton, greenButton, blueButton, pinkButton)


// single function
// redButton.addEventListener('click', function(){
//     body.style.backgroundColor = '#ff7675';
// })

// greenButton.addEventListener('click', function(){
//     body.style.backgroundColor = '#55efc4';
// })

// advence function

button.forEach(function(value){
    value.addEventListener('click', function(){
        let className = this.classList.value;
        body.style.backgroundColor = className;
    })
})