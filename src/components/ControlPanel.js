import Controls from "./Controls";
import Heading from "./Heading";
import NumberPad from "./NumberPad";

function ControlPanel({ handleNumberClick, handleEraserClick }) {
    return (
        <div className="col">
            <div className="control-panel">
                <Heading />
                <NumberPad handleNumberClick={handleNumberClick} />
                <Controls handleEraserClick={handleEraserClick} />
            </div>
        </div>
    );
}

export default ControlPanel;
