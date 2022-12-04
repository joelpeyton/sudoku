import NumberBtn from "./NumberBtn";

function NumberPad({ handleNumberClick }) {
    let numberBtns = [];
    for (let i = 1; i < 9; i++) {
        numberBtns.push(<NumberBtn key={i} number={i} bWidth={'1px'} handleNumberClick={handleNumberClick}/>)
    }
    numberBtns.push(<NumberBtn key={9} number={9} bWidth={'0px'} handleNumberClick={handleNumberClick}/>)
    return (
        <div className="numberPad">
            {numberBtns}
        </div>
    );
}

export default NumberPad;
