import React from "react";
import Navbar from "./Navbar";

function background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <Navbar />
        <h1 className="absolute font-[Impact] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[13vw] leading-none">
          Sticky
        </h1>
      </div>
    </>
  );
}

export default background;
