import generateBoard from "./generateBoard";

function setInitialProps() {
    let board = generateBoard();
    let initialProps = [];
    let column;
    let row = 0;
    let block = 1;
    let cCounter = 0;
    let rCounter = 0;

    for (let i = 0; i <= 80; i++) {
        column = i % 9 + 1;   
        column === 1 && row++;

        if (cCounter === 3 || cCounter === 6) {
            block++;
        } else if (cCounter === 9) {
            cCounter = 0;
            block -= 2;
            rCounter++;
            if (rCounter === 3 || rCounter === 6) {
                block += 3;
            } 
        }
        cCounter++;

        let currentSquare = {
            key: i,
            id: String(i),
            correctNumber: String(board[i]),
            currentNumber: String(board[i]),
            column: String(column),
            row: String(row),
            block: String(block),
            active: false
        };

        initialProps.push(currentSquare); 
    }

    return initialProps;
}

export default setInitialProps;
