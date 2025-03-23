"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function HomeP() {
  const [newItem, setNewItem] = useState([]);
  const navigate = useRouter();

  useEffect(() => {
    async function getNewItem() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      const newItem = data.find((item) => item?.new === true);
      setNewItem(newItem);
    }

    getNewItem();
  }, []);

  return (
    <section>
      {newItem ? (
        <div>
          <h2>NEW PRODUCT</h2>
          <h1>{newItem.name}</h1>
          <p>{newItem.description}</p>
          <button>SEE PRODUCT</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
