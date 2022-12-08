function Square({ 
        id,
        currentNumber,
        bgColor,
        color,
        fontWeight,
        column,
        row, 
        block,    
        handleSquareClick
    }
) {

    return (
        <div 
            type="button" 
            className="number" 
            id={id} 
            column={column} 
            row={row} 
            block={block} 
            style={{backgroundColor:bgColor, color:color, fontWeight:fontWeight}} 
            onClick={handleSquareClick}
        >
            {currentNumber}
        </div>
    );
}

export default Square;
