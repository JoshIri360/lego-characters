import "./App.css";
import Build from "./components/Build";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="font-oswald">
        <Navbar />
        {/* <Home /> */}
        <Build />
      </div>
    </>
  );
}

export default App;
