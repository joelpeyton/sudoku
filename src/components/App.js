import { useState } from "react";
import Header from "./Header";
import Square from "./Square";
import Grid from "./Grid";
import NumberPad from "./NumberPad";
import ButtonGroup from "./ButtonGroup";
import initialProps from "../js/setInitialProps";

function App() {
    const [squareProps, setSquareProps] = useState(initialProps); 
    let squares = [];
    for (let index in squareProps) {
        squares.push(
            <Square 
                key={squareProps[index].key}
                id={squareProps[index].id} 
                correctNumber={squareProps[index].correctNumber}
                currentNumber={squareProps[index].currentNumber}
                bgColor={squareProps[index].bgColor}
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
        let number = e.target.innerText;
        const updatedSquareProps = squareProps.map(squareProp => {
            squareProp.active = squareProp.id === id ? true : false;
            if (squareProp.id === id) {
                squareProp.bgColor = '#bbdefb';
            } else if (squareProp.column === column || squareProp.row === row || squareProp.block === block) {
                squareProp.bgColor = '#e2ebf3';
            } else if (squareProp.currentNumber === number) {
                squareProp.bgColor = '#c3d7ea';
            } else {
                squareProp.bgColor = 'white';
            }
            return squareProp;
        });
        setSquareProps(updatedSquareProps);
    }

    function handleNumberClick(e){
        let chosenNumber = e.target.innerText;
        const updatedSquareProps = squareProps.map(squareProp => {
            if (squareProp.active) {
                if (squareProp.currentNumber === chosenNumber) {
                    squareProp.currentNumber = ' ';
                } else {
                    squareProp.currentNumber = chosenNumber;
                }
                return squareProp;
            } else {
                return squareProp;
            }
        });
        setSquareProps(updatedSquareProps);
    }

    return (
        <>
            <Header />
            <div className="container mb-3">
                <div className="row">
                    <div className="col">
                        <ButtonGroup />
                    </div>  
                </div>
            </div>
            <div className="container">
                <div className="game-area">
                        <Grid squares={squares}/>
                        <NumberPad handleNumberClick={handleNumberClick}/>
                </div>
            </div>
        </>
    );
}

export default App;
