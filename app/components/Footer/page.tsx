import React from "react";
import Image from "next/image";
import img from "../../../public/assets/shared/desktop/image-best-gear.jpg";

export default function Footer() {
  return (
    <footer>
      <Image
        src={img}
        alt="Image of guy with headphones"
        width={327}
        height={300}
      />
    </footer>
  );
}
