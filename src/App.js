import "./App.css";
import LawReader from "./Components/LawReader/LawReader";
import Navbar from "./Components/Navbar";
// import Law from "./Components/Law";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Law /> */}
      <LawReader />
    </div>
  );
}

export default App;
