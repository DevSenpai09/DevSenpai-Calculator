import React, { useState } from "react";
import EqualsAndSwitchButton from "./EqualsAndSwitchButton";

const symbols = ({
  showInput = { showInput },
  buttonsBoardSymbols,
  buttonsIteration,
  changeButtonsBoard,
  equalsTo,
}) => {
  const symbols = [
    {
      sign: "(",
      value: "(",
    },
    {
      sign: ")",
      value: ")",
    },
    {
      sign: "x",
      sup: "y",
      value: "^",
    },
    {
      sign: "n!",
      value: "fac(",
    },
    {
      sign: "x",
      sup: "2",
      value: "sqr(",
    },
    {
      sign: "x",
      sup: "3",
      value: "cube(",
    },
    {
      sign: "%",
      value: "%",
    },
    {
      sign: "log",
      value: "log(",
    },

    {
      sign: "1/x",
      value: "1/(",
    },
    {
      sign: "sin",
      value: "sin(",
    },
    {
      sign: "cos",
      value: "cos(",
    },

    {
      sign: "tan",
      value: "tan(",
    },
    {
      sign: "Pi",
      value: "Pi",
    },
    {
      sign: "sqrt",
      value: "sqrt(",
    },
    {
      sign: "cbrt",
      value: "cbrt(",
    },
    {
      sign: "e",
      value: "e",
    },
    {
      sign: "10",
      sup: "x",
      value: "10^(",
    },
    {
      sign: ".",
      value: ".",
    },
    {
      component: EqualsAndSwitchButton,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 pt-5">
      {symbols.map((symbol) => {
        if (typeof symbol.sign === "string") {
          return (
            <button
              key={symbols.indexOf(symbol)}
              onClick={() => {
                showInput(symbol.value);
              }}
              className="flex w-full items-center justify-center rounded-md bg-[#534369] text-xl text-[#e4dfec] shadow-[0_0_1px_1px_rgba(0,0,0,0.5)]"
            >
              {symbol.sign}
              <sup>{symbol.sup}</sup>
            </button>
          );
        } else {
          return (
            <EqualsAndSwitchButton
              key={symbols.indexOf(symbol)}
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

export default symbols;
