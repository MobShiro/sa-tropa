import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './styles.css';

const Counter = () => {
  const [bgColor, setBgColor] = useState("white");

  // Function to update background color
  const updateBgColor = (event) => {
    event.preventDefault();
    const newColor = event.target.elements.colorInput.value;
    setBgColor(newColor);
  };

  return (
    <Router>
      <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/update-color">Update Color</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Hello my name is Joshua Ortega I'm From BSIT-3B</h2>} />
          <Route path="/update-color" element={
            <form onSubmit={updateBgColor}>
              <label>
                Enter Color:
                <input type="text" name="colorInput" />
              </label>
              <button type="submit">Update Color</button>
            </form>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default Counter;