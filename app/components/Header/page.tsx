"use client";

import React from "react";
import hamburger from "../../../public/burger-bar.png";
import cart from "../../../public/shopping-cart (1).png";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div>
        {" "}
        <Image src={hamburger} alt="Burger menu" width={20} height={20} />
        <h1>audiophile</h1>
        <Image src={cart} alt="Shopping cart" width={20} height={20} />
      </div>
    </header>
  );
}
