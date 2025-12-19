console.log("Today we are going to learn dom")
let h1 = document.querySelector("#heading");
console.log(h1)

let p = document.querySelectorAll(".para");
console.log(p);
let tag= document.querySelector("h3");
console.log(tag);

let ps=document.querySelectorAll(".para");
console.log(ps[0].innerText);
ps[0].innerText="Paragraph 11";
console.log(ps[1].innerHTML);
ps[1].innerHTML="<i>This is itallic</i>"
ps[1].style.backgroundColor="yellow";
document.body.style.backgroundColor="green";
console.log(ps[1].className);
console.log(ps[1].classList);
ps[1].classList.add("para4", "para5");
ps[1].classList.remove("para");
console.log(ps[1].classList.contains("para6"));
ps[1].classList.toggle("para6");

let h4=document.createElement("h4");
console.log(h4);

h4.innerText="This is heading 4";
document.body.appendChild(h4);

let h5=document.createElement("h5");
h5.innerText="This is heading 5";
document.body.append(h4,h5)
let b = document.createElement("b");
b.innerText="This is bold tag";
console.log(b);

let div = document.querySelector(".parent");
console.log(div);
// div.append(b)
// div.prepend(b)
div.before(b)
// // div.after(b)
// div.appendChild(b)

let handleBtn=()=>{
    console.log("click")
}
// let button=document.querySelector("#btn1");
// console.log(button);
// button.onClick=()=>{
//     console.log("button click")
// }
let btn2=document.getElementById("btn2");
console.log(btn2);
btn2.addEventListener("click",()=>{
    console.log("btn clicked");
}
)

let pbody=document.getElementById("paragh");
console.log(pbody);
pbody.addEventListener("dblclick",()=>{
    console.log("para double clicked");
})
pbody.addEventListener("mousedown",()=>{
    console.log("mouse down");
})   
pbody.addEventListener("mouseup",()=>{
    console.log("mouse up");
})   

pbody.style.backgroundColor="pink";