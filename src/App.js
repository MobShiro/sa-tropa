import Counter from "./Counter";
import Message from "./Message";
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>REACT JS APP</h1>
      <Message text="JUSWA" />
      <Counter />
    </div>
  );
};

export default App;