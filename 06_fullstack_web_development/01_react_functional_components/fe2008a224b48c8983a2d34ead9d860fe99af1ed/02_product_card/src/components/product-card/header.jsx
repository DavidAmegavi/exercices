import React from "react";

const CardHeader = ({ header }) => {
  return (
    <div className="Card-header-content">
      <h1>{header.name}</h1>
      <div className="logo">{/* <img src={header.infos.platform_logo.url} /> */}</div>
    </div>
  );
};

export default CardHeader;
