function Square({ 
        id,
        currentNumber,
        bgColor,
        column,
        row, 
        block,    
        handleSquareClick
    }
) {

    return (
        <div type="button" className="number" id={id} column={column} row={row} block={block} style={{backgroundColor:bgColor}} onClick={handleSquareClick}>
            {currentNumber}
        </div>
    );
}

export default Square;
