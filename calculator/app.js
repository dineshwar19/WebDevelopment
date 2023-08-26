const screen = document.getElementById("result");
function display(val){
    screen.value += val;
}
function operation(){
    let op = eval(screen.value);
    screen.value = op;
}
const clear = document.getElementById("clear");
clear.addEventListener('click',()=>{
        screen.value = " ";
})
