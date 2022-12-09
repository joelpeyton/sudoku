import NumberBtn from "./NumberBtn";

function NumberPad({ handleNumberClick, disableControls }) {
    let numberBtns = [];
    for (let i = 1; i < 10; i++) {
        numberBtns.push(<NumberBtn key={i} number={i} handleNumberClick={handleNumberClick} disableControls={disableControls}/>)
    }
    
    return (
        <div className="number-pad">
            <div className="row">
                {numberBtns[6]}
                {numberBtns[7]}
                {numberBtns[8]}
            </div>
            <div className="row">
                {numberBtns[3]}
                {numberBtns[4]}
                {numberBtns[5]}
            </div>
            <div className="row">
                {numberBtns[0]}
                {numberBtns[1]}
                {numberBtns[2]}
            </div>
        </div>
    );
}

export default NumberPad;
