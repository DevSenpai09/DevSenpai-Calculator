import React, { useState } from "react";
import EqualsAndSwitchButton from "./EqualsAndSwitchButton";

const alphabets = ({
  showInput,
  buttonsBoardSymbols,
  buttonsIteration,
  changeButtonsBoard,
  equalsTo,
}) => {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    <EqualsAndSwitchButton />,
  ];

  return (
    <div className="grid grid-cols-5 gap-2 pt-5">
      {alphabets.map((element) => {
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
              start={"col-start-2"}
              end={"col-end-6"}
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

export default alphabets;
