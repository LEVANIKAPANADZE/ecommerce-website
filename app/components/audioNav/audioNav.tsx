import Link from "next/link";
import React from "react";

export default function audioNav() {
  const navArr = [
    {
      path: "/HEADPHONES",
      name: "HEADPHONES",
    },

    {
      path: "/SPEAKERS",
      name: "SPEAKERS",
    },

    {
      path: "/EARPHONES",
      name: "EARPHONES",
    },
  ];

  return (
    <div>
      {navArr.map((e) => {
        return <div></div>;
      })}
    </div>
  );
}
