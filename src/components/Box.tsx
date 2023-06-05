/** @format */
"use client";

import clsx from "clsx";

type Props = {
  player?: "x" | "o" | null;
};

export default function Box({ player = null }: Props) {
  console.log("player: ", player);
  return (
    <div className=" items-center justify-center w-24 h-24   rounded-md text-center flex bg-slate-700 shadow-md">
      {player && (
        <p
          className={clsx(
            "block capitalize  text-5xl font-bold ",
            { "text-green-300": player === "x" },
            { "text-yellow-500": player === "o" }
          )}
        >
          {player}
        </p>
      )}
    </div>
  );
}
