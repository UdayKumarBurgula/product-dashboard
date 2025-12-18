import React, { useState } from "react";

export default function AddProduct({ onAddProduct }) {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productId.trim() || !productName.trim() || !price.trim()) return;

    const newProduct = {
      productId: productId.trim(),
      productName: productName.trim(),
      price: Number(price),
      createdAt: new Date().toISOString()
    };

    onAddProduct(newProduct);

    setProductId("");
    setProductName("");
    setPrice("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2 className="cardTitle">Add Product</h2>

      <div className="row">
        <label className="label">Product ID</label>
        <input
          className="input"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="P101"
        />
      </div>

      <div className="row">
        <label className="label">Product Name</label>
        <input
          className="input"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Laptop"
        />
      </div>

      <div className="row">
        <label className="label">Price</label>
        <input
          className="input"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="49999"
        />
      </div>

      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
