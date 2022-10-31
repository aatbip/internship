import "./App.css";
import BodyComponentInHomepage from "./components/Body";

const App = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1>HELLO WORLD</h1>
      </div>
      <BodyComponentInHomepage name="hello" age="10" isActive={true} />
    </div>
  );
};

export default App;
