import { useState } from "react";
import Header from "./Header";
import Square from "./Square";
import Grid from "./Grid";
import NumberPad from "./NumberPad";
import ButtonGroup from "./ButtonGroup";
import setInitialProps from "../js/setInitialProps";
import hideNumbers from "../js/hideNumbers";

function App() {
    const [squareProps, setSquareProps] = useState(setInitialProps); 
    const [difficulty, setDifficulty] = useState('easy');
    const [isNewGame, setIsNewGame] = useState(true);
    
    if (isNewGame) {setUpBoard()};

    function setUpBoard() {
        let hiddenNumbers = hideNumbers(difficulty);
        const updatedSquareProps = squareProps.map(squareProp => {
            squareProp.currentNumber = squareProp.correctNumber;
            if (hiddenNumbers.includes(squareProp.id)) {squareProp.currentNumber = ''};
            return squareProp;
        });
        setIsNewGame(false);
        setSquareProps(updatedSquareProps);
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

    function handleNumberClick(e) {
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

    function handleDifficulty(e) {
        let difficulty = e.target.id;
        setIsNewGame(true);
        setDifficulty(difficulty);
    }

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

    return (
        <>
            <Header />
            <div className="container mb-3">
                <div className="row">
                    <div className="col">
                        <ButtonGroup handleDifficulty={handleDifficulty}/>
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
