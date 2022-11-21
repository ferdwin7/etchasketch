for (let i = 0; i < 15; i++) {
    let divRowName = "divRow" + i;
    const divRow = document.createElement('div');
    divRow.setAttribute("id", divRowName);
    divRow.classList.add("row");
    const board = document.getElementById('board');
    board.appendChild(divRow);
    for (let j = 0; j < 15; j++) {
        let divColumnName = "divColumn" + j;
        const divColumn = document.createElement('div');
        divColumn.classList.add(divColumnName);
        divColumn.classList.add("box");
        let divRow2 = document.getElementById(divRowName);
        divRow2.appendChild(divColumn);
    }
}