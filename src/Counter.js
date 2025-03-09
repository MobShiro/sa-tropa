import { useState } from "react";

const Counter = () => {
  const [message, setMessage] = useState("Hello!");

  // Function to update message in a unique way
  const updateMessage = (action) => {
    switch (action) {
      case "greet":
        setMessage("Hey there! How's it going?");
        break;
      case "funny":
        setMessage("Why don’t skeletons fight each other? They don’t have the guts! 😂");
        break;
      case "motivate":
        setMessage("You are amazing! Keep pushing forward! 💪");
        break;
      case "reset":
        setMessage("Hello!");
        break;
      default:
        setMessage("Hmm... what do you want?");
    }
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => updateMessage("greet")}>Greet</button>
      <button onClick={() => updateMessage("funny")}>Tell a Joke</button>
      <button onClick={() => updateMessage("motivate")}>Motivate</button>
      <button onClick={() => updateMessage("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
