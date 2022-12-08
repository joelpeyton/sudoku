import Controls from "./Controls";
import Heading from "./Heading";
import NumberPad from "./NumberPad";

function ControlPanel({ handleNumberClick, handleCheckboardClick, handleEraserClick, disableNumberBtns, disableEraserBtn }) {
    return (
        <div className="col">
            <div className="control-panel">
                <Heading />
                <NumberPad handleNumberClick={handleNumberClick} disableNumberBtns={disableNumberBtns} />
                <Controls 
                    handleCheckboardClick={handleCheckboardClick} 
                    handleEraserClick={handleEraserClick} 
                    disableEraserBtn={disableEraserBtn}
                />
            </div>
        </div>
    );
}

export default ControlPanel;
