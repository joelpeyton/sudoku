import Controls from "./Controls";
import Heading from "./Heading";
import NumberPad from "./NumberPad";

function ControlPanel({ handleNumberClick }) {
    return (
        <div className="col">
            <div className="control-panel">
                <Heading />
                <NumberPad handleNumberClick={handleNumberClick}/>
                <Controls />
            </div>
        </div>
    );
}

export default ControlPanel;
