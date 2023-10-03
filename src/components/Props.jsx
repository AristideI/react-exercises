import { useState } from "react";

export default function Props() {
  let [count, setCount] = useState(0);
  function handleClick() {
    setCount((prev) => {
      return prev + 1;
    });
  }
  return (
    <section className="w-screen h-screen bg-green-600 grid place-content-center ">
      <p className="text-white font-bold text-4xl mb-12">
        Button has been clicked {count} times
      </p>
      <button
        onClick={handleClick}
        className="font-bold text-5xl hover:text-4xl hover:text-blue-600 transition-all duration-500 border-2 border-purple-700 px-8 py-2 rounded-xl bg-red-400"
      >
        Add
      </button>
    </section>
  );
}
