import { useState } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Capture from "./components/Capture";
import Custom from "./components/Custom";
import Props from "./components/Props";
import Maps from "./components/Maps";
import Maps2 from "./components/Maps2";
import Form from "./components/Form";
import JSON from "./components/JSON";

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
      <div className="w-full h-screen">
        <Maps />
      </div>
      <div className="w-full h-screen">
        <Maps2 />
      </div>
      <div className="w-full h-screen">
        <Form />
      </div>
      <div className="w-full h-screen">
        <JSON />
      </div>
    </section>
  );
}

export default App;
