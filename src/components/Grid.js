function Grid({ squares }) {
    let grid = [];
    let column;
    let row = 0;
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
        grid.push(
            <div className="square" key={i} style={{borderBottomWidth:bWidth, borderRightWidth: rWidth}}>
                {squares[i]}
            </div>
        )
    }
    
    return ( 
        <div className="board">
            {grid}
        </div>
    );
}

export default Grid;
