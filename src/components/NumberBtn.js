function NumberBtn({ number, handleNumberClick, disableNumberBtns }) {
    function handleOnMouseDown(e) {
        e.target.style.backgroundColor = '#bbdefb';
    }

    function handleOnMouseUp(e) {
        e.target.style.backgroundColor = '';
    }

    if (disableNumberBtns) {
        return (
            <div className="col m-1 numberBtn" onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
                {number}
            </div>
        );
    } else {
        return (
            <div className="col m-1 numberBtn" onClick={handleNumberClick} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
                {number}
            </div>
        );
    }
}

export default NumberBtn;
