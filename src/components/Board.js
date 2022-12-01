import Square from "./Square";

function Board() {
    let board = [];
    let bWidth, rWidth;
    for (var i = 0; i < 9; i++){
        bWidth = "0px";
        for (var j = 0; j < 9; j++){     
            rWidth = "0px";
            if (i === 2 || i === 5) { bWidth = "3px" }
            if (j === 2 || j === 5) { rWidth = "3px" }   
            board.push(<Square key={j + (i * 9)} number={0} bWidth={bWidth} rWidth={rWidth}/>)
        }
    }
    
    return (
        <>
            <div className="container ">
                <div className="board">
                    {board}
                </div>
            </div>
        </>
    );
}

export default Board;
