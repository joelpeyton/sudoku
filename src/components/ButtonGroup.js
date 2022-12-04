function ButtonGroup({ handleDifficulty }) {
    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="easy" autoComplete="off" defaultChecked onChange={handleDifficulty}/>
            <label className="btn btn-outline-secondary" htmlFor="easy">Easy</label>

            <input type="radio" className="btn-check" name="btnradio" id="medium" autoComplete="off" onChange={handleDifficulty}/>
            <label className="btn btn-outline-secondary" htmlFor="medium">Medium</label>

            <input type="radio" className="btn-check" name="btnradio" id="hard" autoComplete="off" onChange={handleDifficulty}/>
            <label className="btn btn-outline-secondary" htmlFor="hard">Hard</label>
        </div>
    );
}

export default ButtonGroup;