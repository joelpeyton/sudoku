function Controls({ handleCheckboardClick, handleEraserClick, handleNewGameClick, disableControls }) {
    let eraserBtn = disableControls ? 
        <div className="col"><i className="bi bi-eraser-fill"></i></div> :
        <div className="col"><i className="bi bi-eraser-fill" onClick={handleEraserClick}></i></div>

    let checkBoard = disableControls ?
        <div className="col"><i className="bi bi-check2-square"></i></div> :
        <div className="col"><i className="bi bi-check2-square" onClick={handleCheckboardClick}></i></div>
    
        return (
        <div className="controls">
            <div className="row">
                {checkBoard}
                {eraserBtn}
                <div className="col"><i className="bi bi-repeat" onClick={handleNewGameClick}></i></div>
            </div>
            <div className="row">
                <div className="col"><span>Check board</span></div>
                <div className="col"><span>Erase</span></div>
                <div className="col"><span>New Game</span></div>
            </div>
        </div>
    );
}

export default Controls;
