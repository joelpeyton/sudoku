function NumberBtn({ number, handleBtnClick }) {
    function handleOnMouseDown(e) {
        e.target.style.backgroundColor = '#bbdefb';
    }

    function handleOnMouseUp(e) {
        e.target.style.backgroundColor = '';
    }

    return (
        <div type="button" className="numberBtn" onClick={handleBtnClick} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}>
            {number}
        </div>
    );
}

export default NumberBtn;
