import React, { useState } from "react";
import useProducts from "./useProducts";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, status, products] = useProducts({ salesOnly: checked });
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  if (loading) return <p>loading...</p>;

  if (status) return <p>{status}</p>;

  return (
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
  );
}
