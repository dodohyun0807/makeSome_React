import React, { useEffect, useState } from "react";

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Loading...");
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`data/${checked ? "sale_" : ""}p.json`)
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
  }, [checked]);

  // if (status === "Error!") {
  //   return <p>error</p>;
  // }

  // if (loading) {
  //   <p>loading</p>;
  // }

  return (
    <>
      {!loading ? (
        <>
          <input
            id="checkbox"
            type="checkbox"
            value={checked}
            onChange={handleChange}
          />
          <label htmlFor="checkbox">Show Only 🔥 Sale</label>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <article>
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </article>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h1>{status}</h1>
        </>
      )}
    </>
  );
}
