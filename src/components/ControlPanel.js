import Controls from "./Controls";
import Heading from "./Heading";
import NumberPad from "./NumberPad";

function ControlPanel({ handleNumberClick, handleCheckboardClick, handleEraserClick, handleNewGameClick, disableControls }) {
    return (
        <div className="col">
            <div className="control-panel">
                <Heading />
                <NumberPad handleNumberClick={handleNumberClick} disableControls={disableControls} />
                <Controls 
                    handleCheckboardClick={handleCheckboardClick} 
                    handleEraserClick={handleEraserClick} 
                    handleNewGameClick={handleNewGameClick}
                    disableControls={disableControls}
                />
            </div>
        </div>
    );
}

export default ControlPanel;
