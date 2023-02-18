import { useState } from "react";
import "./App.css";

function App() {
  const [Hori, setHori] = useState(0);
  const [Veri, setVeri] = useState(0);
  const [blurRadius, setBlurRadius] = useState(0);
  const [Blur, setBlur] = useState(0);
  const [color, setColor] = useState("black");
  const [checkOn, setCheckOn] = useState(false);

  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal length</label>
        <input
          type="range"
          min="-400"
          max="400"
          value={Hori}
          onChange={(e) => setHori(e.target.value)}
        />
        <label>Vertical Length</label>
        <input
          type="range"
          min="-400"
          max="400"
          value={Veri}
          onChange={(e) => setVeri(e.target.value)}
        />
        <label>Blur Radius</label>
        <input
          type="range"
          min="-400"
          max="400"
          value={blurRadius}
          onChange={(e) => setBlurRadius(e.target.value)}
        />
        <label>Blur</label>
        <input
          type="range"
          min="-400"
          max="400"
          value={Blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <label>Color </label>
        <input
          className="color_section"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="switch">
          <label>
            Outline
            <input
              type="checkbox"
              value={checkOn}
              onChange={() => setCheckOn(!checkOn)}
            />
            <span className="lever"></span>
            Inset
          </label>
        </div>
      </div>
      <div className="output">
        <div
          className="box"
          style={{
            boxShadow: `${
              checkOn ? "inset" : " "
            } ${Hori}px ${Veri}px ${blurRadius}px ${Blur}px ${color}`,
          }}
        >
          <p>
            Box-Shadow: {Hori}px {Veri}px {blurRadius}px {Blur}px {color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
