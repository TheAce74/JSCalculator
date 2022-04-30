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
    if(screen.value=="Infinity") {
        screen.value = "Math Error";
    }
    if(screen.value=="undefined") {
        screen.value = "";
    }
}

function del() {
    let del = screen.value;
    let del2 = del.substring(0, del.length-1);
    screen.value = del2;
}

function more() {
    var grid = document.getElementById("grid");
    var grid2 = document.getElementById("grid2");
    grid.style.display = "none";
    grid2.style.display = "grid";
}

function back() {
    grid.style.display = "grid";
    grid2.style.display = "none";
}

function sqrt() {
    let sqrt = eval(Math.sqrt(screen.value));
    screen.value = sqrt;
    if(screen.value=="NaN") {
        screen.value = "Math Error";
    }
}

function log() {
    let log = eval(Math.log10(screen.value));
    screen.value = log;
    if(screen.value=="-Infinity") {
        screen.value = "Math Error";
    }
    if(screen.value=="NaN") {
        screen.value = "Math Error";
    }
}

function info() {
    alert("How To Use \nClick the square root button after typing the number \nThe same goes for the logarithm(base 10) button \nI believe the remaining buttons can be understood from the get-go \nMade by The Ace 😎");
}
