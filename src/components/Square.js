function Square({ 
        id,
        currentNumber,
        bgColor,
        fontWeight,
        column,
        row, 
        block,    
        handleSquareClick
    }
) {

    return (
        <div type="button" className="number" id={id} column={column} row={row} block={block} style={{backgroundColor:bgColor, fontWeight:fontWeight}} onClick={handleSquareClick}>
            {currentNumber}
        </div>
    );
}

export default Square;
