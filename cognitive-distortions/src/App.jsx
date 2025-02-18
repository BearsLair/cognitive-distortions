import "./App.css";
import DistortedThoughts from "./components/DistortedThoughts";
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
        <DistortedThoughts />
      </div>
      <div className="footer"></div>
    </>
  );
}

export default App;
