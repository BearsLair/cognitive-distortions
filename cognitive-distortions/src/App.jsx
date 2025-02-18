import "./App.css";
import Emotions from "./components/Emotions";
import UpsettingEvent from "./components/UpsettingEvent";

function App() {
  return (
    <>
      <div>
        <h1 className="title">Cognitive Behavior Therapy Workshop</h1>
      </div>
      <div className="form-section">
        <UpsettingEvent />
        <Emotions />
      </div>
      <div className="footer"></div>
    </>
  );
}

export default App;
