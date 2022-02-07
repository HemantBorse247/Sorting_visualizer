function timer(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        }, milisec);
    })
}

function doRed(el1, el2) {
    el1.classList.add('red');
    el2.classList.add('red');
}

function doGreen(el1, el2) {
    el1.classList.add('green');
    el2.classList.add('green');
}

function doYellow(el1, el2) {
    el1.classList.add('yellow');
    el2.classList.add('yellow');
}



function swap(el1, el2) {
    let x, y;
    x = parseInt(el1.innerHTML);
    y = parseInt(el2.innerHTML);
    el1.innerHTML = y.toString();
    el2.innerHTML = x.toString();
    el1.style.height = `${y}%`;
    el2.style.height = `${x}%`;
}

function disablebtn(elem) {
    elem.classList.add('disabled');
    elem.disabled = true;
}

function enablebtn(elem) {
    elem.classList.remove('disabled');
    elem.disabled = false;
}

//* this function basically takes the input from the range input and calls the genArray function.
function changeRange() {
    let rng = range.value;
    genArray(rng);
}




// *  this function generates a new random array which consists of 'rng' number of columns.
function genArray(rng) {
    let nodes = document.getElementsByClassName('node');
    while (nodes.length !== 0) {
        nodes[0].remove();
        val.pop();
    }
    for (var i = 1; i <= rng; i++) {
        let node = document.createElement("div");
        node.classList.add('node');
        node.style.width = `${(grid.clientWidth) / (2 * rng)}px`;
        let width = `${(grid.clientWidth) / (2 * rng)}`;
        let per = Math.floor((Math.random() * (101 - 9)) + 9);
        node.style.height = `${per}%`
        node.innerHTML = `${per}`;
        if (width <= 20) {
            node.classList.add('hideNum');
        }
        val.push(per);
        grid.append(node);
    }
}
