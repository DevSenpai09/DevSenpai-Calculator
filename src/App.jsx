import { useState } from "react";
import Calculator from "./pages/Calculator";
import "./App.css";

function App() {
  return (
    <main className=" h-screen  w-screen rounded-none bg-[#83729b] p-5 sm:max-h-[600px] sm:max-w-lg sm:rounded-md">
      <Calculator />
    </main>
  );
}

export default App;
