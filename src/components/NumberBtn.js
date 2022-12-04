function NumberBtn({ number, bWidth, handleNumberClick }) {
    function handleOnMouseDown(e) {
        e.target.style.backgroundColor = '#bbdefb';
    }

    function handleOnMouseUp(e) {
        e.target.style.backgroundColor = '';
    }

    return (
        <div className="numberBtn" style={{borderBottomWidth: bWidth}} onClick={handleNumberClick} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
            {number}
        </div>
    );
}

export default NumberBtn;
