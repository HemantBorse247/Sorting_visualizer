let arr = document.getElementsByClassName('circle');
let range = document.getElementById('Array-range');
let grid = document.getElementById("grid");
let btn = document.getElementById('changeRange');
let bubble = document.getElementById('bubble');
let drop = document.getElementById('drop-menu');
let speed = document.getElementById('speed-range');
let time = 500;
let val = [];

//* this function runs when the window has finished loading and basically it loads the initial array columns
window.addEventListener('load', () => {
    range.value = 20;
    speed.value = 500;
    for (i = 0; i <= 5; i++) {
        let node = document.createElement("div");
        node.classList.add('node');
        node.style.width = `${(grid.clientWidth) / (2 * 10)}px`;
        let per = Math.floor((Math.random() * (101 - 9)) + 9);
        node.style.height = `${per}%`
        node.innerHTML = `${per}`;
        val.push(per);
        grid.append(node);
    }
})


//* runs when bubble sort algo is selcted and sort button is clicked
async function runBubble() {
    disablebtn(range);
    disablebtn(bubble);
    disablebtn(speed);
    await Bubble();
    enablebtn(range);
    enablebtn(bubble);
    enablebtn(speed);
}




