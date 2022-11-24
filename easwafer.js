// var data = $.csv.toObjects(wafertry.csv);

const array = ["-2,0","-1,0","0,0","1,0","2,0","-1,1","0,1","1,1","0,2","0,-2","-1,-1","0,-1","1,-1"];
let maxOfX = 0;
let maxOfY = 0;
let minOfX = 0;
let minOfY = 0;

array.forEach((element) => {
    let array = element.split(',');
    x = parseInt(array[0]), y = parseInt(array[1]);
    //console.log("x is " + x + ", " + "y is " + y);
    if (x > maxOfX) {
        maxOfX = x;
        // console.log("max of X updated to " + x);
    }
    if (y > maxOfY) {
        maxOfY = y;
        // console.log("max of y updated to " + y);
    }
    if (x < minOfX) {
        minOfX = x;
        // console.log("min of x updated to " + x);
    }
    if (y < minOfY) {
        minOfY = y;
        // console.log("min of y updated to " + y);
    }
})

// console.log("min of X is " + minOfX);
// console.log("max of X is " + maxOfX);
// console.log("min of Y is " + minOfY);
// console.log("max of Y is " + maxOfY);

for (let i = minOfX; i <= maxOfX; i++) {
    let divRowName = "divRow" + i;
    const divRow = document.createElement('div');
    divRow.setAttribute("id", divRowName);
    divRow.classList.add("row");
    const board = document.getElementById('board');
    board.appendChild(divRow);
    for (let j = minOfY; j <= maxOfY; j++) {
        let varXY = i + "," + j;
        if (array.includes(varXY)) {
            let divColumnName = "divColumn" + j;
            const divColumn = document.createElement('div');
            divColumn.classList.add(divColumnName);
            divColumn.classList.add("box");
            let divRow2 = document.getElementById(divRowName);
            divRow2.appendChild(divColumn);
        }
    }
}

eachBox = document.getElementsByClassName('box');
console.log(eachBox);
Array.from(eachBox).forEach((element) => {
    element.addEventListener('mousedown', () => {
        if (element.classList.contains("highlight")) {
            element.classList.remove("highlight");
        }
        else {
        element.classList.add("highlight");
        }
    })
    element.addEventListener('mouseenter', (e) => {
        if (e.buttons > 0) {
            // if (element.classList.contains("highlight")) {
            //     element.classList.remove("highlight");
            // }
            // else {
            element.classList.add("highlight");
            // }
        }
    })
})