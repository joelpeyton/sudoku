function Square({ 
        id,
        number,
        bgColor,
        bWidth,
        rWidth,
        column,
        row, 
        block,      
        handleSquareClick
    }
) {

    return (
        <div 
            type="button"
            className="square" 
            id={id}
            column={column}
            row={row}
            block={block}
            style={
                {
                    borderBottomWidth: bWidth, 
                    borderRightWidth: rWidth,
                    backgroundColor: bgColor
                }
            }
            onClick={handleSquareClick}
        >
            {number}
        </div>
    );
}

export default Square;
