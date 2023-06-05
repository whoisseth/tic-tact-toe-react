/** @format */
"use client";

import React from "react";
import Box from "./Box";

type Props = {};

export default function Board({}: Props) {
  return (
    <div className="grid grid-rows-3 grid-cols-3 gap-4  w-full ">
      {Array(9)
        .fill(null)
        .map((props, i) => (
          <Box key={i} player="x" />
        ))}
    </div>
  );
}
