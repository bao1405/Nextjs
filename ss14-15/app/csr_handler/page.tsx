"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <ul>
          <li>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}
