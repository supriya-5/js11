

const element1 = document.getElementById("msg");
console.log(element1.innerHTML);
console.log(element1.innerText);
console.log(element1);

const element2 = document.getElementsByClassName("immsg");

console.log(element2[0].innerHTML);
console.log(element2[0].innerText);
console.log(element2[1].innerHTML);
console.log(element2[1].innerText);
console.log(element2);

const element3 = document.getElementsByTagName("h1");
console.log(element3[0].innerHTML);
console.log(element3[0].innerText);
console.log(element3[1].innerHTML);
console.log(element3[1].innerText);
console.log(element3);

function changeText(){
    const changeText = document.getElementsByTagName("h1");
    changeText[0].innerText = "DOM";
    console.log( changeText[0].innerText);
}

function changeColor(){
    const changeColor = document.getElementsByClassName("immsg");
    changeColor[1].style.color = "red";
  
}
