import React, { useState } from "react";

const necessaryButtons = ({ changeMode, backSpace, clearAll }) => {
  const necessaryButtons = [
    {
      id: 1,
      name: "mode",
      function: () => {
        changeMode();
      },
    },

    {
      id: 2,
      name: "CE",
      function: () => {
        clearAll();
      },
    },

    {
      id: 3,
      name: "C",
      function: () => {
        backSpace();
      },
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 ">
      {necessaryButtons.map((button) => (
        <button
          key={button.id}
          onClick={button.function}
          className={"text-md w-full rounded-md bg-[#ea7d7d] text-[white] "}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default necessaryButtons;
