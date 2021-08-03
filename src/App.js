import "./App.css";
import Welcome from "./component/Welcome";

function App() {
  document.title = "Redux Counter App";
  return (
    <div className="App">
      <h1 className="welcome">Counter App Using Redux</h1>
      <Welcome />
    </div>
  );
}

export default App;
