const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['#05c4','grey','white','#777','powderblue']

body.style.backgroundColor = '#05c4';

button.addEventListener('click',change)

function change(){
    const colorIndex = parseInt(Math.random()*color.length)

    body.style.backgroundColor = color[colorIndex];

}


function validate(){
    var name  = document.form.name.value;
    console.log(name);
}

//perform action on submit click
const clicking = document.getElementById("submit")
clicking.addEventListener('click',function(){
    alert("yahh, Thank you exploring my project");
})
