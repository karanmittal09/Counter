import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1e293b]">
      <div className="bg-[#2d3748] p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6">
        
        <h2 className="text-[#38bdf8] text-2xl font-semibold">Increment and Decrement</h2>

        <div className="bg-white text-[#1e293b] text-3xl font-bold py-3 px-10 rounded-md shadow-md">
          {count}
        </div>

        <div className="flex gap-6">
          <button 
            onClick={decreaseHandler} 
            className="bg-[#38bdf8] text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md transition hover:bg-[#0284c7] active:scale-95">
            -
          </button>

          <button 
            onClick={increaseHandler} 
            className="bg-[#38bdf8] text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md transition hover:bg-[#0284c7] active:scale-95">
            +
          </button>
        </div>

        <button 
          onClick={resetHandler} 
          className="bg-[#ef4444] text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md transition hover:bg-[#dc2626] active:scale-95">
          Reset
        </button>

      </div>
    </div>
  );
}

export default App;
