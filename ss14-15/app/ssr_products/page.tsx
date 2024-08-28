import axios from "axios";
import React from "react";

async function getData() {
  const res: any = await axios.get("https://fakestoreapi.com/products");
  return res.data;
}

export default async function page() {
  const products = await getData();
  return (
    <div>
      {products.map((product: any) => (
        <div>
          <p>Tên :{product.title}</p>
          <p>Giá: {product.price}</p>
          <p>
            Hình ảnh:
            <img className="w-20 h-20" src={product.image} alt="" />
          </p>
        </div>
      ))}
    </div>
  );
}
