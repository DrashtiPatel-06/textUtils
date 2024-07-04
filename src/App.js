import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const content=["drashti","jeel","bhumi","shiv"];
//let name = "Drashti!!";

function App() {
  const [mode, setMode] = useState("light"); // wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (mode) => {
    setMode({
      mode: mode,
    });
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3b394d";
      showAlert("Dark mode has been enabled", "success");
      //document.title="TextUtils - Light Mode";
      // setInterval(() => {
      //   document.title="TextUtils is Amazing!";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now!";
      // }, 1500);
    } else if (mode === "pink") {
      setMode("pink");
      document.body.style.backgroundColor = "#a8356e";
      showAlert("Pink mode has been enabled", "success");
      //document.title="TextUtils - Pink Mode";
    } else if (mode === "blue") {
      setMode("blue");
      document.body.style.backgroundColor = "#16164a";
      showAlert("Blue mode has been enabled", "success");
    } else if (mode === "teal") {
      setMode("teal");
      document.body.style.backgroundColor = "#186868";
      showAlert("Teal mode has been enabled", "success");
    } else if (mode === "purple") {
      setMode("purple");
      document.body.style.backgroundColor = "#742874";
      showAlert("Purple mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        {/* <div className="App">
      <header>
        <h3>First React App</h3>
      </header>
      <div>
        <button onClick={()=>content[0]}>First</button>&nbsp;
        <button>Second</button>&nbsp;
        <button>Third</button>
      </div>
    </div> */}
        <Navbar
          title="textUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar/> */}
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/" element={ <div className="container my-3"><TextForm
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            /></div>}/>
        </Routes>       
      </Router>
    </>
  );
}

export default App;
