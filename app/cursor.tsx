"use client";

import { useState } from "react";

export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const onMouseMove = (e: any) =>
    setCursorPosition({ top: e.pageY, left: e.pageX });
  return (
    <div
      className="cursor-none absolute w-screen h-screen m-0 top-0 left-0 pointer-events-none"
      onMouseMove={onMouseMove}
    >
      <div className="" style={{ position: "absolute", ...cursorPosition }}>
        <div className="rounded-full absolute p-1 w-1 h-1 border-white border-2" />
      </div>
    </div>
  );
}
