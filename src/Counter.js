import { useState } from "react";

const Counter = () => {
  const [color, setColor] = useState("black");

  // Function to update color
  const updateColor = (color) => {
    setColor(color);
  };

  return (
    <div>
      <h2 style={{ color: color }}>SAMPLE SERVER JOSHUA ORTEGA</h2>
  
    </div>
  );
};

export default Counter;