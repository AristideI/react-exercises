import { useState } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Capture from "./components/Capture";
import Custom from "./components/Custom";
import Props from "./components/Props";

function App() {
  return (
    <section className="overflow-x-hidden">
      <div className="w-full h-screen">
        <HelloWorld />
      </div>
      <div className="w-full h-screen">
        <Capture />
      </div>
      <div className="w-full h-screen">
        <Custom />
      </div>
      <div className="w-full h-screen">
        <Props />
      </div>
    </section>
  );
}

export default App;
