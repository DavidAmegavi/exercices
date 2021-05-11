import React from "react";

const CardHeader = (props) => {
  const { product } = props;
  return (
    <div className="Card-header-content">
      <h1>{product.name}</h1>
      <div className="logo">
        <img src={product.platforms.map((value) => value.platform_logo.url)} />
      </div>
    </div>
  );
};

export default CardHeader;
