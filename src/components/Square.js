function Square({ 
        id,
        number,
        bgColor,
        bWidth,
        rWidth,
        column,
        row,       
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
