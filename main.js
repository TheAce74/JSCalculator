const screen = document.getElementById("screen");

function insertNum(num) {
    screen.value += num;
}

function insertSym(sym) {
    screen.value += sym;
}

function cls() {
    screen.value = "";
}

function calc() {
    const result = eval(screen.value);
    screen.value = result;
}