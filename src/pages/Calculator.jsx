import React, { useState, useEffect } from "react";
import ResultBoard from "../components/ResultBoard";
import ButtonsBoard from "../components/ButtonsBoard";

const landingPage = () => {
  const sqr = (num) => num * num;
  const cube = (num) => num * num * num;
  const sqrt = (num) => Math.sqrt(num);
  const cbrt = (num) => Math.cbrt(num);
  const log = (num) => Math.log(num);
  const cos = (deg) => Math.cos((Math.PI / 180) * deg);
  const sin = (deg) => Math.sin((Math.PI / 180) * deg);
  const tan = (deg) => Math.tan((Math.PI / 180) * deg);
  const fac = (num) => {
    let factorial = 1;
    for (let i = 2; i <= num; i += 1) {
      factorial = factorial * i;
    }
    return factorial;
  };
  const Pi = Math.PI;
  const e = Math.E;

  const modes = ["standard", "algebra", "stats", "maths"];
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [modeIteration, setModeIteration] = useState(0);
  const showInput = (clickValue) => {
    setInput(input + clickValue);
  };

  useEffect(() => {
    if (input != "") {
      try {
        setResult(eval(input));
      } catch (error) {}
    }
  }, [input]);

  const backSpace = () => {
    let inputs = input.split("");
    inputs.pop();
    let newInputs = inputs.join("");
    setInput(newInputs);
  };

  const clearAll = () => {
    setInput("");
  };

  const changeMode = () => {
    if (modeIteration < 3) {
      setModeIteration(modeIteration + 1);
    } else {
      setModeIteration(0);
    }
  };

  const equalsTo = () => {
    setInput(result);
  };

  return (
    <div className="grid h-full grid-rows-[25%_75%]">
      <ResultBoard
        input={input}
        setInput={setInput}
        result={result}
        modes={modes}
        modeIteration={modeIteration}
      />
      <ButtonsBoard
        showInput={showInput}
        changeMode={changeMode}
        backSpace={backSpace}
        clearAll={clearAll}
        equalsTo={equalsTo}
      />
    </div>
  );
};

export default landingPage;
