import React from "react";
import { ProductCard } from "../src/components/product-card/index";
import { render, cleanup, screen } from "@testing-library/react";

describe("ProductCard", () => {
  () => {
    render(<ProductCard />);
  };
});
