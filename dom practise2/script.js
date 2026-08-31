// const increase=document.getElementById("+");
// let count=0;
// increaseButton.addEventListener("keyup",()=>{
//   count++;
//   countElement.textContent=count;
// });
// decreaseButton.addEventListener("keydown",()=>{
//   count--;
//   countElement.textContent=count;
// })
let count =0;
const countv=document.getElementById("countv");
const p=document.getElementById("+");
const n=document.getElementById("-");
const reset=document.getElementById("reset");
p.addEventListener("click",()=>{
  
  count++;
  countv.textContent=count;
})
n.addEventListener("click",()=>{
  count--;
  countv.textContent=count;
})
reset.addEventListener("click",()=>{
  count=0;
  countv.textContent=count;
})
