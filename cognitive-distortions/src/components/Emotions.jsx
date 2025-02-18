const Emotions = () => {
  return (
    <div>
      <h3>What are the emotions you are feeling due to this event?</h3>
      <p>
        List and rate how strong your emotions are from 0% to 100%, with 100%
        being the strongest.
      </p>
      <div>
        <div className="emotion">
          <p className="emotion-label">Emotion 1</p>
          <input className="emotion-text 1" type="text" />
          <p className="emotion-strength-label">Strength:</p>
          <div className="strength">
            <p className="emotion-strength-label">0%</p>
            <input
              className="emotion-range"
              id="emotion-strength 1"
              type="range"
            />
            <p className="emotion-strength-label">100%</p>
          </div>
        </div>
        <div className="emotion">
          <p className="emotion-label">Emotion 2</p>
          <input className="emotion-text 2" type="text" />
          <p className="emotion-strength-label">Strength:</p>
          <div className="strength">
            <p className="emotion-strength-label">0%</p>
            <input
              className="emotion-range"
              id="emotion-strength 2"
              type="range"
            />
            <p className="emotion-strength-label">100%</p>
          </div>
        </div>
        <div className="emotion">
          <p className="emotion-label">Emotion 3</p>
          <input className="emotion-text 3" type="text" />
          <p className="emotion-strength-label">Strength:</p>
          <div className="strength">
            <p className="emotion-strength-label">0%</p>
            <input
              className="emotion-range"
              id="emotion-strength 3"
              type="range"
            />
            <p className="emotion-strength-label">100%</p>
          </div>
        </div>
        <div className="emotion">
          <p className="emotion-label">Emotion 4</p>
          <input className="emotion-text 4" type="text" />
          <p className="emotion-strength-label">Strength:</p>
          <div className="strength">
            <p className="emotion-strength-label">0%</p>
            <input
              className="emotion-range"
              id="emotion-strength 4"
              type="range"
            />
            <p className="emotion-strength-label">100%</p>
          </div>
        </div>
        <div className="emotion">
          <p className="emotion-label">Emotion 5</p>
          <input className="emotion-text 5" type="text" />
          <p className="emotion-strength-label">Strength:</p>
          <div className="strength">
            <p className="emotion-strength-label">0%</p>
            <input
              className="emotion-range"
              id="emotion-strength 5"
              type="range"
            />
            <p className="emotion-strength-label">100%</p>
          </div>
        </div>
        <div className="emotion">
          <p className="emotion-label">Emotion 6</p>
          <input className="emotion-text 6" type="text" />
          <p className="emotion-strength-label">Strength:</p>
          <div className="strength">
            <p className="emotion-strength-label">0%</p>
            <input
              className="emotion-range"
              id="emotion-strength 6"
              type="range"
            />
            <p className="emotion-strength-label">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emotions;
