let initialSquareProps = [];
let column;
let row = 0;
let block = 1;
let cCounter = 0;
let rCounter = 0;
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
        number: '',
        bgColor: 'white',
        bWidth: bWidth,
        rWidth: rWidth,
        block: String(block),
        column: String(column),
        row: String(row),
        active: false
    };

    initialSquareProps.push(currentSquare); 
}

export default initialSquareProps;
