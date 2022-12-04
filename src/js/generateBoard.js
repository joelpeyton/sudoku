// returns the numbers in the column in relation to current position in row 
function getColumn(board, rowPos) {  
    let column = [];
    for (let i = 0; i < board.length; i++) {
        column.push(board[i][rowPos]);
    }
    return column;
}

// returns the numbers in the block in relation to current position in row and current row in board
function getBlock(board, rowPos) {
    let block = [];
    let vertBlock = Math.floor(rowPos / 3) * 3; // # determines which block column in  
    let finish = vertBlock + 3; // # block column end point
    let horzBlock = Math.floor(board.length / 3) * 3; // # determines which block row in 
    for (let j = horzBlock; j < board.length; j++){
        for (let k = vertBlock; k < finish; k++){
            block.push(board[j][k]);
        }
    }
    return block;
}

// returns a number from available choices
function getNumber(block, column, numbers) {
    // populate 'used' with those numbers in the current block
    let used = block;
    // push the numbers in the current column into 'used'
    for (let i = 0; i < column.length; i++){
        if (!(block.includes(column[i]))){
            used.push(column[i]);
        }
    }
    // populate 'choices' with the difference of 'numbers' and 'used' 
    let choices = [];
    for (let j = 0; j < numbers.length; j++){
        if (!(used.includes(numbers[j]))){
            choices.push(numbers[j]);
        }
    }
    // pick a random number if available
    if (choices.length === 0) { 
        return null;
    } else {
        return choices[Math.floor(Math.random() * choices.length)];
    }
}

// return a populated row with the latest random number
function getRow(block, column, number, numbers, row) {
    if (!(column.includes(number)) && !(block.includes(number))){
        row.push(number);
        let index = numbers.indexOf(number);
        if (index > -1) {
            numbers.splice(index, 1); 
        }
    }
    return row;
}

// return a completed sudoku board
function generateBoard() {
    let board = [];
    while (board.length < 9) {
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let row = [];
        let unlucky = false;
        while (row.length < 9){		
            let column = getColumn(board, row.length);
            let block = getBlock(board, row.length);
            let number = getNumber(block, column, numbers);
            if (!number){
                unlucky = true;
                break;
            }
            row = getRow(block, column, number, numbers, row);
        }
        if (!unlucky){ 
            board.push(row);
        }
    }

    /* Flatten board */
    let flattened = [];

    for (let row in board) {
        for (let column in board[row]) {
            flattened.push(board[row][column]);
        }
    }

    return flattened;
}

export default generateBoard;






