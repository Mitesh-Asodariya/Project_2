let uarray = [];
let gamearray = [];
let start = false;
let level = 0;
let ids = ["one", "two", "three", "four"];
let h3 = document.querySelector("h3");
let boxes = document.querySelector(".boxes").children;
document.addEventListener("keypress", function () {
    if (start == false) {
        start = true;
        levelup();
    }
})
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);
}
function levelup() {
    uarray = [];
    level++;
    h3.innerText = `level ${level}`;
    let randno = Math.floor(Math.random() * 4);
    let randid = ids[randno];
    gamearray.push(randid);
    let randbox = document.querySelector(`#${randid}`);
    flash(randbox);
}

for (box of boxes) {
    box.addEventListener("click", function () {
        flash(this);
        uarray.push(this.getAttribute("id"));
        if (uarray[uarray.length - 1] === gamearray[uarray.length - 1]) {
            if (uarray.length == gamearray.length) {
                setTimeout(()=>{
                    levelup();
                },250);
            }
        }else{
            document.body.classList.add("red");
            setTimeout(()=>{
                document.body.classList.remove("red");
            },400);
            h3.innerText = "Game Over !press any key to start";
        }
    })
}