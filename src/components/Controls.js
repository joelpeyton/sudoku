function Controls({ handleCheckboardClick, handleEraserClick, disableEraserBtn, disableNotesBtn }) {
    let eraserBtn = disableEraserBtn ? 
        <div className="col"><i className="bi bi-eraser-fill"></i></div> :
        <div className="col"><i className="bi bi-eraser-fill" onClick={handleEraserClick}></i></div>

    let notesBtn = disableNotesBtn ?
        <div className="col"><i className="bi bi-pencil-square"></i></div> :
        <div className="col"><i className="bi bi-pencil-square"></i></div>
    
        return (
        <div className="controls">
            <div className="row">
                <div className="col"><i className="bi bi-check2-square" onClick={handleCheckboardClick}></i></div>
                {eraserBtn}
            </div>
            <div className="row">
                <div className="col"><span>Check board</span></div>
                <div className="col"><span>Erase</span></div>
            </div>
            <div className="row mt-3">
                {notesBtn}
                <div className="col"><i className="bi bi-repeat"></i></div>
            </div>
            <div className="row">
                <div className="col"><span>Notes</span></div>
                <div className="col"><span>New Game</span></div>
            </div>
        </div>
    );
}

export default Controls;
