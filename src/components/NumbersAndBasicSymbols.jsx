import React, { useState } from "react";
import EqualsAndSwitchButton from "./EqualsAndSwitchButton";

const numbersAndBasicSymbols = ({
  showInput,
  buttonsBoardSymbols,
  buttonsIteration,
  changeButtonsBoard,
  equalsTo,
}) => {
  const numbersAndBasicSymbols = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "/",
    <EqualsAndSwitchButton />,
  ];

  return (
    <div className="grid grid-cols-4 gap-3 pt-5">
      {numbersAndBasicSymbols.map((element) => {
        if (typeof element == "string") {
          return (
            <button
              key={element}
              onClick={() => {
                showInput(element);
              }}
              className="flex w-full items-center justify-center rounded-md bg-[#534369] text-xl text-[#e4dfec] shadow-[0_0_1px_1px_rgba(0,0,0,0.5)]"
            >
              {element}
            </button>
          );
        } else {
          return (
            <EqualsAndSwitchButton
              key={element}
              start={"col-start-3"}
              end={"col-end-5"}
              buttonsBoardSymbols={buttonsBoardSymbols}
              buttonsIteration={buttonsIteration}
              changeButtonsBoard={changeButtonsBoard}
              equalsTo={equalsTo}
            />
          );
        }
      })}
    </div>
  );
};

export default numbersAndBasicSymbols;
