import NumberBtn from "./NumberBtn";

function NumberPad() {
    let numberBtns = [];
    for (let i = 0; i < 9; i++) {
        numberBtns.push(<NumberBtn key={i+1} number={i+1} />)
    }

    return (
        <div className="numberPad">
            {numberBtns}
        </div>
    );
}

export default NumberPad;
