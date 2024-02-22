import React from "react";
import "./App.css";
import Background from "./Components/background";
import Foreground from "./Components/Foreground";

function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-zinc-800">
        <Background />
        <Foreground />
      </div>
    </>
  );
}

export default App;
