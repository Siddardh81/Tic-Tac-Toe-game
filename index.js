let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbutton=document.querySelector(".new-button");
let msg=document.querySelector("#msg");
let alll=document.querySelector(".msg-container");

turn0=true;
const winningpatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

let resetbttn= ()=>{
   turn0=true;
   enablegame();
   alll.classList.add("hide");
   
}



boxes.forEach((box) => {

box.addEventListener("click",()=>{
 console.log("box is clicked");
if(turn0)
{
box.innerText="X"
turn0=false;
}else{

    box.innerText="O";
    turn0=true;
}
box.disabled=true;
checkwinner();

});
    
});

const showwinner=(winner)=>{

     msg.innerText=`winner is ${winner}`;
     alll.classList.remove("hide");

}
const disablegame=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablegame=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""; 
    }
}



const checkwinner= ()=>{

    for(let pattern of winningpatterns){

        let pos1 = boxes [pattern[0]].innerText;
        let pos2 = boxes [pattern[1]].innerText;
        let pos3 = boxes [pattern[2]].innerText;

        if(pos1!==""&&pos2!==""&&pos3!=="")
        {
            if(pos1===pos2&&pos2===pos3)
            {
                console.log("winner");
                showwinner(pos1);
            }
        }
    }
};
newbutton.addEventListener("click",resetbttn);
resetbtn.addEventListener("click",resetbttn);


