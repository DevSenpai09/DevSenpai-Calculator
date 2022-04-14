import React, { useEffect, useState } from "react";
import Alphabets from "./Alphabets";
import NumbersAndBasicSymbols from "./NumbersAndBasicSymbols";
import NecessaryButtons from "./NecessaryButtons";
import Symbols from "./Symbols";

const buttonsBoard = ({
  showInput,
  changeMode,
  backSpace,
  clearAll,
  equalsTo,
}) => {
  const boards = [
    {
      id: 1,
      name: "numbersAndBasicSymbolsBoard",
      component: NumbersAndBasicSymbols,
    },
    {
      id: 2,
      name: "symbolsBoard",
      component: Symbols,
    },
  ];

  const buttonsBoardSymbols = ["{}", "123"];
  const [buttonsIteration, setButtonsIteration] = useState(0);
  const showBoard = boards.find((board) => {
    return boards.indexOf(board) === buttonsIteration;
  });

  const changeButtonsBoard = () => {
    if (buttonsIteration < 1) {
      setButtonsIteration(buttonsIteration + 1);
    } else {
      setButtonsIteration(0);
    }
  };

  return (
    <div className="grid grid-rows-[10%_90%]">
      <NecessaryButtons
        changeMode={changeMode}
        backSpace={backSpace}
        clearAll={clearAll}
      />

      <showBoard.component
        showInput={showInput}
        buttonsBoardSymbols={buttonsBoardSymbols}
        buttonsIteration={buttonsIteration}
        changeButtonsBoard={changeButtonsBoard}
        equalsTo={equalsTo}
      />
    </div>
  );
};

export default buttonsBoard;
