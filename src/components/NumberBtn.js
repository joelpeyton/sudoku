function NumberBtn({ number, handleNumberClick }) {
    function handleOnMouseDown(e) {
        e.target.style.backgroundColor = '#bbdefb';
    }

    function handleOnMouseUp(e) {
        e.target.style.backgroundColor = '';
    }

    return (
        <div className="col m-1 numberBtn" onClick={handleNumberClick} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
            {number}
        </div>
    );
}

export default NumberBtn;
