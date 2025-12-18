import React, { useEffect, useLayoutEffect, useRef } from "react";

export default function ProductList({ products }) {
  const listRef = useRef(null);

  useEffect(() => {
    console.log("[ProductList] products changed:", products);
  }, [products]);

  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [products.length]);

  return (
    <div className="card">
      <h2 className="cardTitle">Product List</h2>

      <ul className="scrollList" ref={listRef}>
        {products.length === 0 ? (
          <li className="empty">No products yet. Add one above.</li>
        ) : (
          products.map((p) => (
            <li className="item" key={p.productId}>
              <div className="itemMain">
                <span className="badge">{p.productId}</span>
                <span className="name">{p.productName}</span>
              </div>
              <div className="price">₹ {p.price}</div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
