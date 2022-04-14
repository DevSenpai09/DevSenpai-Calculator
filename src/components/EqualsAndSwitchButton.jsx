import React, { useState } from "react";
import symbols from "./Symbols";

const equalsAndSwitchButton = ({
  start,
  end,
  buttonsBoardSymbols,
  buttonsIteration,
  changeButtonsBoard,
  equalsTo,
}) => {
  return (
    <div className={start + " grid grid-cols-2 gap-3 " + end}>
      <button
        onClick={() => {
          changeButtonsBoard();
        }}
        className={
          " flex h-full w-full items-center justify-center rounded-md bg-[#cfcfcf] text-3xl text-[#534369]"
        }
      >
        {buttonsBoardSymbols[buttonsIteration]}
      </button>
      <button
        onClick={() => {
          equalsTo();
        }}
        className={
          " flex h-full w-full items-center justify-center rounded-md bg-[#e9967a] text-3xl text-[#e4dfec]"
        }
      >
        =
      </button>
    </div>
  );
};

export default equalsAndSwitchButton;
