const DistortionsInThought = () => {
  return (
    <div>
      <h3>What are the distortions in the thoughts you have been having?</h3>
      <p>
        Put a check in the boxes that indicate the distortion in your thoughts.
      </p>
      <div className="thought-eval">
        <p id="current-thought 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="distortion-list">
          <div>
            <input type="checkbox" />
            <p>Magnification or minimization</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Catastrophizing</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Overgeneralization</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Magical Thinking</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Personalization</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Jumping to Conclusions</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Mind Reading</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Fortune Telling</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Emotional Reasoning</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Disqualifying the positive</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>Should statements</p>
          </div>
          <div>
            <input type="checkbox" />
            <p>All-or-nothing thinking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistortionsInThought;
