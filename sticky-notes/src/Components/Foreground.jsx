import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const datas = [
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, asperiores",
      download: false,
      filesize: ".3mb",
      close: false,
      tags: { isopen: true, title: "Download now", color: "blue" },
    },
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, asperiores",
      download: false,
      filesize: ".3mb",
      close: false,
      tags: { isopen: false, title: "Download now", color: "green" },
    },
    {
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, asperiores",
      download: false,
      filesize: ".4mb",
      close: true,
      tags: { isopen: true, title: "Upload Now", color: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-3 flex-wrap p-4"
    >
      {datas.map((item, index) => (
        <Card item={item} key={index} refrence={ref} />
      ))}
    </div>
  );
}

export default Foreground;
