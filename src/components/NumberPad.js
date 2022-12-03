import NumberBtn from "./NumberBtn";

function NumberPad({ handleBtnClick }) {
    let numberBtns = [];
    for (let i = 1; i < 10; i++) {
        numberBtns.push(<NumberBtn key={i} number={i} handleBtnClick={handleBtnClick}/>)
    }

    return (
        <div className="numberPad">
            {numberBtns}
        </div>
    );
}

export default NumberPad;
