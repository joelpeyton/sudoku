import { useState } from "react";
import Board from "./Board";
import NumberPad from "./NumberPad";
import Square from "./Square";
import initialSquareProps from "../js/squareProps";

function Display() {
    const [squareProps, setSquareProps] = useState(initialSquareProps); 

    let board = [];
    for (let index in squareProps) {
        board.push(
            <Square 
                key={squareProps[index].key}
                id={squareProps[index].id} 
                number={squareProps[index].number}
                bgColor={squareProps[index].bgColor}
                bWidth={squareProps[index].bWidth} 
                rWidth={squareProps[index].rWidth}
                column={squareProps[index].column}
                row={squareProps[index].row}
                block={squareProps[index].block}
                active={squareProps[index].active}
                handleSquareClick={handleSquareClick}
            />
        )  
    }

    function handleSquareClick(e) {
        let id = e.target.id;
        let column = e.target.attributes.column.value;
        let row = e.target.attributes.row.value;
        let block = e.target.attributes.block.value;
        const updatedSquareProps = squareProps.map(squareProp => {
            if (squareProp.id === id) {
                squareProp.bgColor = '#bbdefb';
                squareProp.active = true;
                return squareProp;
            } else if (squareProp.column === column || squareProp.row === row || squareProp.block === block) {
                squareProp.bgColor = '#e2ebf3';
                squareProp.active = false;
                return squareProp;
            } else {
                squareProp.bgColor = 'white';
                squareProp.active = false;
                return squareProp;
            }
        });
        setSquareProps(updatedSquareProps);
    }
    
    function handleBtnClick(e){
        let chosenNumber = e.target.innerText;
        const updatedSquareProps = squareProps.map(squareProp => {
            if (squareProp.active) {
                if (squareProp.number === chosenNumber) {
                    squareProp.number = ' ';
                } else {
                    squareProp.number = chosenNumber;
                }
                return squareProp;
            } else {
                return squareProp;
            }
        });
        setSquareProps(updatedSquareProps);
    }

    return (
        <div className="container">
            <Board board={board}/>
            <NumberPad handleBtnClick={handleBtnClick}/>
        </div>
    );

}

export default Display;
