function NumberBtn({ number, bWidth, handleBtnClick }) {
    function handleOnMouseDown(e) {
        e.target.style.backgroundColor = '#bbdefb';
    }

    function handleOnMouseUp(e) {
        e.target.style.backgroundColor = '';
    }

    return (
        <div className="numberBtn" style={{borderRightWidth: bWidth}} onClick={handleBtnClick} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
            {number}
        </div>
    );
}

export default NumberBtn;
