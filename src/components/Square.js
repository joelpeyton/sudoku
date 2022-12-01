function Square({ number, bWidth, rWidth }) {
    return (
        <div className="square" style={{borderBottomWidth: bWidth, borderRightWidth: rWidth}}>
            {number}
        </div>
    );
}

export default Square;
