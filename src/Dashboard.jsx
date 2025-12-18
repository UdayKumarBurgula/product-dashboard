import React, { useMemo } from "react";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import ProductSummary from "./components/ProductSummary";
import { useProducts } from "./hooks/useProducts";
import { useTotalCount } from "./hooks/useTotalCount";

export default function Dashboard() {
  const { products, addProduct } = useProducts();

  const getTotalCount = useTotalCount(products);
  const totalCount = getTotalCount();

  const uniqueProductNames = useMemo(() => {
    const set = new Set(products.map((p) => p.productName.toLowerCase()));
    return Array.from(set);
  }, [products]);

  return (
    <div className="container">
      <header className="header">
        <h1>Products Dashboard</h1>
        <p className="subtitle">Using React Hooks + React State Management</p>
      </header>

      <div className="grid">
        <div className="left">
          <AddProduct onAddProduct={addProduct} />

          <div className="card">
            <h2 className="cardTitle">Unique Product Names (useMemo)</h2>
            {uniqueProductNames.length === 0 ? (
              <p className="muted">No unique names yet.</p>
            ) : (
              <div className="chips">
                {uniqueProductNames.map((name) => (
                  <span className="chip" key={name}>
                    {name}
                  </span>
                ))}
              </div>
            )}
          </div>

          <ProductSummary totalCount={totalCount} />
        </div>

        <div className="right">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}
