import { useEffect, useState } from "react";

const useProducts = ({ salesOnly }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setStatus(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        setStatus("Error!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [salesOnly]);

  return [loading, status, products];
};

export default useProducts;
