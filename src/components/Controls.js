function Controls() {
    return (
        <div className="controls">
            <div className="row">
                <div className="col"><i className="bi bi-check2-square"></i></div>
                <div className="col"><i className="bi bi-eraser-fill"></i></div>
            </div>
            <div className="row">
                <div className="col"><span>Check board</span></div>
                <div className="col"><span>Erase</span></div>
            </div>
            <div className="row">
                <div className="col"><i className="bi bi-pencil-square"></i></div>
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
