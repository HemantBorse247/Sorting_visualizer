async function Bubble() {
    let nodes = document.querySelectorAll('.node');
    let pass = 0;
    while (true) {
        let j = 0;
        for (let i = 1; i < nodes.length - pass; i++) {
            let x, y;
            x = parseInt(nodes[i].innerHTML);
            y = parseInt(nodes[i - 1].innerHTML);
            doYellow(nodes[i], nodes[i - 1]);
            time = speed.value;
            if (x < y) {
                console.log(time, typeof (time));
                await timer(time);
                doRed(nodes[i], nodes[i - 1]);
                await timer(time / i);
                swap(nodes[i], nodes[i - 1]);
                await timer(time / i);
                doGreen(nodes[i], nodes[i - 1]);
                await timer(time / i);
                nodes[i].classList.remove('green');
                nodes[i - 1].classList.remove('green');
                nodes[i].classList.remove('yellow');
                nodes[i - 1].classList.remove('yellow');
                nodes[i].classList.remove('red');
                nodes[i - 1].classList.remove('red');
                await timer(time / i);
                j++;
            }
            else {
                await timer(time);
                doGreen(nodes[i], nodes[i - 1]);
                await timer(time / i);
                nodes[i].classList.remove('green');
                nodes[i - 1].classList.remove('green');
                nodes[i].classList.remove('yellow');
                nodes[i - 1].classList.remove('yellow');
            }
        }
        nodes[nodes.length - 1 - pass].classList.add('purple');
        if (j > 0) {
            pass++;
        }
        else {
            let i = 0;
            while (!nodes[i].classList.contains('purple')) {
                nodes[i].classList.add('purple');
                i++;
            }
            break;
        }
    }
}