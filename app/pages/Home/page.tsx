"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Product } from "../../types";

export default function HomeP() {
  const [newItem, setNewItem] = useState<Product | null>(null);

  useEffect(() => {
    async function getNewItem() {
      const response = await fetch("http://localhost:3000/api/products");
      const data: Product[] = await response.json();
      const newItem = data.find((item) => item?.new === true);
      setNewItem(newItem);
    }

    getNewItem();
  }, []);

  return (
    <main>
      <div>{newItem ? <h1>{newItem.name}</h1> : <p>Loading...</p>}</div>
    </main>
  );
}
