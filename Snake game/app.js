const gameBoard = document.querySelector('canvas');
const context = gameBoard.getContext('2d');
const Width = gameBoard.width;
const Height = gameBoard.height;
const unit = 20;
let startx;
let starty;
let xVelocity = 20;
let yVelocity = 0;
let score = document.getElementById('scoreVal');
let initial = 0;
let active = true;
let started = false;

const snake = [
    {x:unit*3,y:0},
    {x:unit*2,y:0},
    {x:unit,y:0},
    {x:0,y:0}
];
window.addEventListener('keydown',keyPress);
startGame();



function startGame(){
    context.fillStyle = "#211";
    context.fillRect(0,0,Width,Height);
    createFood();
    displayFood();
    // displaySnake();
    // moveSnake();
    displaySnake();
    
}
function clearBoard(){
    context.fillStyle = "#211";
    context.fillRect(0,0,Width,Height);

}
function createFood(){
    startx = Math.floor(Math.random()*Width / unit) * unit;
    starty = Math.floor(Math.random()*Height / unit) * unit;
}
function displayFood(){
    context.fillStyle = "#fc5a03";
    context.fillRect(startx,starty,unit,unit)
}
function displaySnake(){
    context.fillStyle = "#020ffa"
    context.strokeStyle = "#42c5f5";
    snake.forEach((snakePart) =>{
        context.fillRect(snakePart.x,snakePart.y,unit,unit);
        context.strokeRect(snakePart.x,snakePart.y,unit,unit);
    })
}
function moveSnake(){
    const head = {x:snake[0].x+xVelocity,
                  y:snake[0].y+yVelocity }
    snake.unshift(head);
    if(snake[0].x == startx && snake[0].y == starty){
        initial += 1;
        score.textContent = initial
        createFood();
        
    }else{
        snake.pop();
    }
}
function snakeMove(){
    if(active){
        setTimeout(()=>{
            clearBoard();
            displayFood();
            moveSnake();
            displaySnake();
            gameOver();
            snakeMove();
        },300)
    }
    else{
        clearBoard();
        context.font = "bold 40px sans"
        context.fillStyle ="white";
        context.textAlign = "center";
        context.fillText("Game Over!!",Width/2,Height/2);
    }
}
function keyPress(event){
    if(!started){
        started = true;
        snakeMove();
    }
    
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    switch(true){
        case(event.keyCode == LEFT && xVelocity != unit):
            xVelocity = -unit;
            yVelocity = 0;
            break;
        
        case(event.keyCode == RIGHT && xVelocity != -unit):
            xVelocity = unit;
            yVelocity = 0;
            break;
        
        case(event.keyCode == UP &&  yVelocity != unit):
            xVelocity = 0;
            yVelocity = -unit;
            break;
        
        case(event.keyCode == DOWN && yVelocity != -unit):
            xVelocity = 0;
            yVelocity = unit;
            break;

        case(event.keyCode == 32):
            started =false;
            break;
    }
}
function gameOver(){
    switch(true){
        case(snake[0].x<0):
        case(snake[0].x>=Width):
        case(snake[0].y<0):
        case(snake[0].y>=Height):
        active= false;
        break;
    }
}