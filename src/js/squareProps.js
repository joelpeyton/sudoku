let initialSquareProps = [];
let column;
let row = 0;
let block;
let rWidth;
let bWidth; 

for (let i = 0; i <= 80; i++) {
    column = i % 9 + 1;   
    if (column === 3 || column === 6) {
        rWidth = '2px';
    } else if (column === 9) { 
        rWidth = '1px';
    } else {
        rWidth = '0px';
    }
    
    if (column === 1) {row++};
    if (row === 3 || row === 6) {
        bWidth = '2px';
    } else if (row === 9) { 
        bWidth = '1px';
    } else {
        bWidth = '0px';
    }

    let currentSquare = {
        key: i,
        id: String(i),
        number: String(i),
        bgColor: 'white',
        bWidth: bWidth,
        rWidth: rWidth,
        block: '',
        column: String(column),
        row: String(row)
    };

    initialSquareProps.push(currentSquare);
}

export default initialSquareProps;
