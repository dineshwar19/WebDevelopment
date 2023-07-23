const hexNum = document.querySelector(".hexadecimal");
const colorSpace = document.querySelector(".colorChanger");
const button = document.querySelector(".btn");
const hexVal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getHex() {
  let val = hexVal[Math.floor(Math.random() * 16)];
  return val;
}

button.addEventListener('click',changer);
function changer(){
  let hash="#";
  for(let i=1;i<=6;i++){
   hash+=getHex()
  }
 hexNum.innerHTML=hash
 colorSpace.style.background=hash
}
