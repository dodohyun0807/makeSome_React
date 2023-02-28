import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState("loading...");
  const [loading, setLoading] = useState(true);
  const handleChange = () => {
    setLoading(true);
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥뜨끈한 데이터를 네트워크에서 받아옴");
        setProducts(data);
      })
      .catch((e) => {
        setStatus("Error!");
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      console.log("🧹 깨끗하게 청소하는 일들을 합니다.");
    };
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
