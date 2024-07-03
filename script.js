let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msg = document.querySelector("#msg");
let msgCont = document.querySelector(".msgCont");
let chance=true;
let count=0;
const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]; 
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
} 
const checkWinner = ()=>{
    for (let pattern of winPatterns){
        let pos1v = boxes[pattern[0]].innerText;
        let pos2v = boxes[pattern[1]].innerText;
        let pos3v = boxes[pattern[2]].innerText;
        if (pos1v !="" &&pos2v !="" &&pos3v !="" )
            {if(pos1v ===pos2v && pos2v===pos3v)
                {showWinner(pos1v);
                return true;}} 
    }
} 
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if (chance){
        box.innerText="O";
        chance=false;
    }
    else {
        box.innerText="X";
        chance=true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    } 
    }); 
});
const resetGame=() => {
    for (let box of boxes){
        box.innerText="";
        box.disabled = false;}
    msgCont.classList.add("hide");
    chance=true;
    count=0;
};
const gameDraw = () => {
    msg.innerText = "Game was a Draw.";
    msgCont.classList.remove("hide");
    disableBoxes();
  };
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);