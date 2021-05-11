import React from "react";
import CardBody from "./body";
import CardFooter from "./footer";
import CardHeader from "./header";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className="header">
      <CardHeader product={product} />
      <CardBody game={product} />
      <CardFooter link={product} />
    </div>
  );
};

export default ProductCard;
