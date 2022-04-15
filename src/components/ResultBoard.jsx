import React, { useState } from "react";

const resultBoard = ({ input, setInput, result, modes, modeIteration }) => {
  return (
    <div className="h-full pb-5">
      <label
        htmlFor="input"
        className="bg-[none] grid h-full rounded-md p-3 shadow-[inset_0_0_3px_-0_rgba(0,0,0,0.5)]"
      >
        {/* <span className="h-fit text-xs capitalize text-white text-opacity-30">
          {modes[modeIteration]}
        </span> */}
        <input
          id="input"
          type="text"
          className="w-full rounded-md bg-transparent text-right text-[35px] lowercase tracking-widest text-[dimgrey]"
          value={input}
          onChange={(e) => {
            setInput(
              /^([0-9]|\+|\-|\*|\/|\(|\))$/.test(e.nativeEvent.data)
                ? e.target.value
                : input
            );
          }}
        />
        <div className="flex w-full items-center justify-end rounded-md bg-transparent p-1">
          <p className="text-right text-[25px] text-[#000000] opacity-30">
            {result}
          </p>
        </div>
      </label>
    </div>
  );
};

export default resultBoard;
