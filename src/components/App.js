import Board from "./Board";
import Header from "./Header";
import NumberPad from "./NumberPad";

function App() {
  return (
    <>
        <Header />
        <div className="container ">
            <Board />
            <NumberPad />
        </div>
    </>
  );
}

export default App;
