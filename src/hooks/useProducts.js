import { useCallback, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);

  const addProduct = useCallback((product) => {
    setProducts((prev) => [...prev, product]);
  }, []);

  return { products, addProduct };
}
