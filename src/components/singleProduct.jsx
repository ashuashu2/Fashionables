import React from "react";
import { Link } from "react-router-dom";

export function ProductCard({
  id,
  name,
  price,
  orignalPrice,
  category,
  description,
  noDetail
}) {
  return (
    <li
      style={{
        padding: "1rem",
        listStyle: "none",
        margin: "1rem",
        border: "1px solid #efefef"
      }}
    >
      <div style={{ fontSize: "large" }}>
        {name} {orignalPrice} GB
      </div>
      <div>
        Price: {price} {category}
      </div>
      {/* {noDetail && <Link to={`/product/${id}`}> View description </Link>} */}
      {!noDetail && <p> {description} </p>}
    </li>
  );
}
