import { useState } from "react";
import "./App.css";
import Build from "./components/Build";
// import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [uri, setUri] = useState("");

  const handleRandomClick = (arr, setImage) => {
    const randomPart = arr[Math.floor(Math.random() * arr.length)];
    setImage(randomPart);
  };

  return (
    <>
      <div className="font-oswald">
        <Navbar uri={uri} />
        {/* <Home /> */}
        <Build setUri={setUri} handleRandomClick={handleRandomClick} />
      </div>
    </>
  );
}

export default App;
