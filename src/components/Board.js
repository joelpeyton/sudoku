import Square from "./Square";
import initialSquareProps from "../js/squareProps";
import { useState } from "react";

function Board() {
    let board = [];
    for (let index in initialSquareProps) {
        board.push(
            <Square 
                key={initialSquareProps[index].key}
                id={initialSquareProps[index].id} 
                number={initialSquareProps[index].number}
                bgColor={initialSquareProps[index].bgColor}
                bWidth={initialSquareProps[index].bWidth} 
                rWidth={initialSquareProps[index].rWidth}
                column={initialSquareProps[index].column}
                row={initialSquareProps[index].row}
                block={initialSquareProps[index].block}
                handleSquareClick={handleSquareClick}
            />
        )  
    }

    const [squareProps, setSquareProps] = useState(initialSquareProps); 

    function handleSquareClick(e) {
        let id = e.target.id;
        let column = e.target.attributes.column.value;
        let row = e.target.attributes.row.value;
        let block = e.target.attributes.block.value;
        const updatedSquareProps = squareProps.map(squareProp => {
            if (squareProp.id === id) {
                squareProp.bgColor = '#bbdefb';
                return squareProp;
            } else if (squareProp.column === column || squareProp.row === row || squareProp.block === block) {
                squareProp.bgColor = '#e2ebf3';
                return squareProp;
            } else {
                squareProp.bgColor = 'white';
                return squareProp;
            }
        });
        setSquareProps(updatedSquareProps);
    }
    
    return ( 
        <div className="board">
            {board}
        </div>
    );
}

export default Board;
