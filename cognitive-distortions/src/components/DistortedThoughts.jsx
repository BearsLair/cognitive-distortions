const DistortedThoughts = () => {
  return (
    <div>
      <h3>What are the thoughts bothering you about this event?</h3>
      <p>
        Use the slider to select how much you believe in this thought, with 100%
        indicating strong belief.
      </p>
      <div>
        <div className="thought">
          <p className="thought-label">Thought 1</p>
          <textarea className="thought-text 1" />
          <p className="thought-strength-label">Strength:</p>
          <div className="strength">
            <p className="thought-strength-label">0%</p>
            <input
              className="thought-range"
              id="thought-strength 1"
              type="range"
            />
            <p className="thought-strength-label">100%</p>
          </div>
        </div>
      </div>
      <div>
        <div className="thought">
          <p className="thought-label">Thought 2</p>
          <textarea className="thought-text 2" />
          <p className="thought-strength-label">Strength:</p>
          <div className="strength">
            <p className="thought-strength-label">0%</p>
            <input
              className="thought-range"
              id="thought-strength 2"
              type="range"
            />
            <p className="thought-strength-label">100%</p>
          </div>
        </div>
      </div>
      <div>
        <div className="thought">
          <p className="thought-label">Thought 3</p>
          <textarea className="thought-text 3" />
          <p className="thought-strength-label">Strength:</p>
          <div className="strength">
            <p className="thought-strength-label">0%</p>
            <input
              className="thought-range"
              id="thought-strength 3"
              type="range"
            />
            <p className="thought-strength-label">100%</p>
          </div>
        </div>
      </div>
      <div>
        <div className="thought">
          <p className="thought-label">Thought 4</p>
          <textarea className="thought-text 4" />
          <p className="thought-strength-label">Strength:</p>
          <div className="strength">
            <p className="thought-strength-label">0%</p>
            <input
              className="thought-range"
              id="thought-strength 4"
              type="range"
            />
            <p className="thought-strength-label">100%</p>
          </div>
        </div>
      </div>
      <div>
        <div className="thought">
          <p className="thought-label">Thought 5</p>
          <textarea className="thought-text 5" />
          <p className="thought-strength-label">Strength:</p>
          <div className="strength">
            <p className="thought-strength-label">0%</p>
            <input
              className="thought-range"
              id="thought-strength 5"
              type="range"
            />
            <p className="thought-strength-label">100%</p>
          </div>
        </div>
      </div>
      <div>
        <div className="thought">
          <p className="thought-label">Thought 6</p>
          <textarea className="thought-text 6" />
          <p className="thought-strength-label">Strength:</p>
          <div className="strength">
            <p className="thought-strength-label">0%</p>
            <input
              className="thought-range"
              id="thought-strength 6"
              type="range"
            />
            <p className="thought-strength-label">100%</p>
          </div>
        </div>
      </div>
      <div>
        <div className="thought">
          <p className="thought-label">Thought 7</p>
          <textarea className="thought-text 7" />
          <p className="thought-strength-label">Strength:</p>
          <div className="strength">
            <p className="thought-strength-label">0%</p>
            <input
              className="thought-range"
              id="thought-strength 7"
              type="range"
            />
            <p className="thought-strength-label">100%</p>
          </div>
        </div>
      </div>
      <div>
        <div className="thought">
          <p className="thought-label">Thought 8</p>
          <textarea className="thought-text 8" />
          <p className="thought-strength-label">Strength:</p>
          <div className="strength">
            <p className="thought-strength-label">0%</p>
            <input
              className="thought-range"
              id="thought-strength 8"
              type="range"
            />
            <p className="thought-strength-label">100%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistortedThoughts;
