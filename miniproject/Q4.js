function bubblemaker(){
    var flutter = "";
for (let i = 1; i <= 138; i++) {
    var rn = Math.floor(Math.random()*10);
    // += is for adding new value in previous value because if we can't use flutter only show one value because previous value replace with new value; 
     flutter += `<div class="bubble">${rn}</div>`;
   
    
}
document.querySelector("#pbtm").innerHTML = flutter;
};
var setTimer = 60;
function runTimer(){
    timer = setInterval(() => {

       if (setTimer > 0) {
        setTimer--;
        document.querySelector("#Time").innerHTML = setTimer;

        
       }
       else{
        clearInterval(timer);
        document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>`;
       }
        
    },1000);
};
var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").innerHTML = hitrn;
};

var score = 0;
function scoreIncrease() {
    score += 1;
    document.querySelector("#scoreVal").textContent = score;
};
// // "dets.target.textContent" basically this give us a digit inside a bubble which we click ,if only right dets.target it give us whole div
// and dets is a variable which we pass as parameter and 'target' is a property which  refers to the element that triggered the event.;
document.querySelector("#pbtm").addEventListener("click",(dets) => {
    var clickedbubble = Number(dets.target.textContent);
    if (clickedbubble == hitrn) {
        scoreIncrease();
        bubblemaker();
        getNewHit();
    }else{
        alert("Wrong Hit");
    }
})

bubblemaker();
runTimer();
getNewHit();
scoreIncrease();