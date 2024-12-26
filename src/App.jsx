import React, { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh", textAlign: "center",width:"100vw", padding:"10" }}>
      <h1 style={{color:"black"}}>Click button to change Color</h1>
      <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
      <button onClick={() => changeColor("blue")}>Blue</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("red")}>Red</button>
      </div>
    </div>
  );
}

export default App;
