import { useState } from "react";
import Github from "./Github";
import Square from "./Square";
import Grid from "./Grid";
import setInitialProps from "../js/setInitialProps";
import hideNumbers from "../js/hideNumbers";
import ControlPanel from "./ControlPanel";

function App() {
    const [squareProps, setSquareProps] = useState(setInitialProps); 
    const [isNewGame, setIsNewGame] = useState(true);
    const [hideTick, setHideTick] = useState(true);
    const [disableControls, setDisableControls] = useState(false);
    
    if (isNewGame) {setUpBoard()};

    function setUpBoard() {
        let hiddenNumbers = hideNumbers('easy');
        const updatedSquareProps = squareProps.map(squareProp => {
            if (hiddenNumbers.includes(squareProp.id)) {
                squareProp.currentNumber = ' ';
                squareProp.isInitialNumber = false;
                squareProp.fontWeight = 'initial';
            }
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
            } else if (squareProp.currentNumber === number && number !== ' ') {
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
            if (squareProp.active && !squareProp.isInitialNumber) {
                if (squareProp.currentNumber === chosenNumber) {
                    squareProp.currentNumber = ' ';
                } else {
                    squareProp.currentNumber = chosenNumber;
                    squareProp.color = '#344861';
                }
                return squareProp;
            } else {
                return squareProp;
            }
        });
        setSquareProps(updatedSquareProps);
    }

    function handleCheckboardClick() {
        let counter = 0;
        const updatedSquareProps = squareProps.map(squareProp => {           
            if (squareProp.currentNumber === squareProp.correctNumber) {
                counter++;
            }

            if (squareProp.currentNumber !== squareProp.correctNumber && squareProp.currentNumber !== ' ') {
                squareProp.color = 'red';
                return squareProp;
            } else {
                squareProp.color = '#344861';
                return squareProp;
            }            
        });
        if (counter === 81) {
            setHideTick(false);
            setDisableControls(true);
        }
        setSquareProps(updatedSquareProps);
    }

    function handleEraserClick() {
        const updatedSquareProps = squareProps.map(squareProp => {
            if (squareProp.active) {
                squareProp.currentNumber = ' ';
                return squareProp;
            } else {
                return squareProp;
            }
        });
        setSquareProps(updatedSquareProps);
    }

    function handleNewGameClick() {
        window.location.reload(true);
    }

    let squares = [];
    for (let index in squareProps) { 
        squares.push(
            <Square 
                key={squareProps[index].key}
                id={squareProps[index].id} 
                isInitialNumber={squareProps[index].isInitialNumber}
                correctNumber={squareProps[index].correctNumber}
                currentNumber={squareProps[index].currentNumber}
                bgColor={squareProps[index].bgColor}
                color={squareProps[index].color}
                fontWeight={squareProps[index].fontWeight}
                column={squareProps[index].column}
                row={squareProps[index].row}
                block={squareProps[index].block}
                active={squareProps[index].active}
                handleSquareClick={handleSquareClick}
            />
        )  
    } 

    return (
        <div className="container text-center">
            <Github />
            <div className="row">
                <Grid squares={squares} hideTick={hideTick} />
                <ControlPanel 
                    handleNumberClick={handleNumberClick} 
                    handleCheckboardClick={handleCheckboardClick}
                    handleEraserClick={handleEraserClick}
                    handleNewGameClick={handleNewGameClick}
                    disableControls={disableControls}
                />
            </div>
        </div>
    );
}

export default App;
