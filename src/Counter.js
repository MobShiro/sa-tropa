import { useState } from "react";

const Counter = () => {
  const [color, setColor] = useState("black");

  // Function to update color
  const updateColor = (color) => {
    setColor(color);
  };

  return (
    <div>
      <h2 style={{ color: color }}>JOSHUA ORTEGA</h2>
      <button onClick={() => updateColor("blue")}>Blue</button>
      <button onClick={() => updateColor("green")}>Green</button>
      <button onClick={() => updateColor("orange")}>Orange</button>
      <button onClick={() => updateColor("red")}>Red</button>
      <button onClick={() => updateColor("purple")}>Purple</button>
      <button onClick={() => updateColor("yellow")}>Yellow</button>
      <button onClick={() => updateColor("pink")}>Pink</button>
      <button onClick={() => updateColor("brown")}>Brown</button>
      <button onClick={() => updateColor("black")}>Reset</button>
    </div>
  );
};

export default Counter;