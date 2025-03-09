import Counter from "./Counter";
import Message from "./Message";

const App = () => {
  return (
    <div>
      <h1>Simple React App</h1>
      <Message text="Welcome to React!" />
      <Counter />
    </div>
  );
};

export default App;
