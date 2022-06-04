import React from "react";
import Product from "./Product";

const products = [
  { id: 1, name: "product 1", price: 30 },
  { id: 2, name: "product 2", price: 50 },
  { id: 3, name: "product 3", price: 150 },
];

const ComplexList = () => {
  return (
    <section>
      {products.map((pr) => {
        return <Product {...pr} key={pr.id} />;
      })}
    </section>
  );
};

export default ComplexList;
