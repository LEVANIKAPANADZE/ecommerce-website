"use client";

import React from "react";
import hamburger from "../../../public/burger-bar.png";
import cart from "../../../public/shopping-cart (1).png";
import Image from "next/image";
import { useState } from "react";
import AudioNav from "../audioNav/audioNav";

export default function Header() {
  const [hamBurger, setHamBurger] = useState(false);
  console.log(hamBurger);

  return (
    <header>
      <div>
        {" "}
        <Image
          src={hamburger}
          alt="Burger menu"
          width={20}
          height={20}
          onClick={() => setHamBurger(!hamBurger)}
        />
        <h1>audiophile</h1>
        <Image src={cart} alt="Shopping cart" width={20} height={20} />
      </div>

      {hamBurger ? <AudioNav /> : null}
    </header>
  );
}
