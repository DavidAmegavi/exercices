import React from "react";
import CardBody from "./body";
import CardFooter from "./footer";
import CardHeader from "./header";

const ProductCard = ({ product }) => {
  return (
    <div className="header">
      <CardHeader
        header={product.name}
        // {...product.platforms.map((infos) => {
        //   return infos.platform_logo.url;
        // })}
      />
    </div>
  );
};

export default ProductCard;
