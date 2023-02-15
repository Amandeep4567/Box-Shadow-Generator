import { useState } from "react";
import "./App.css";

function App() {
  const [Hori, setHori] = useState(10);
  const [Veri, setVeri] = useState(10);
  const [Blur, setBlur] = useState(10);

  return (
    <div className="App">
      <div className="controls">
        <label>Horizontal length</label>
        <input type="range" min="-200" max="200" />
      </div>
      <div className="output"></div>
    </div>
  );
}

export default App;
