import "./App.css";
import DistortionsInThoughts from "./components/DistortionsInThought";
import UpsettingEvent from "./components/UpsettingEvent";

function App() {
  return (
    <>
      <div>
        <h1 className="title">Cognitive Behavior Therapy Workshop</h1>
      </div>
      <div className="upsetting-event">
        <UpsettingEvent />
      </div>
      <div className="form-section">
        <DistortionsInThoughts />
      </div>
      <div className="footer"></div>
    </>
  );
}

export default App;
