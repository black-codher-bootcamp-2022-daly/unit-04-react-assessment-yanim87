import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductList from "../components/ProductList";
import data from "../models/data.json";

describe("ProductList functionality", () => {
  test("Displays initial product list", () => {
    const expectedLength = data.length;
    render(
      <ProductList
        items={data}
        addToBasket={null}
        removeFromBasket={null}
        itemCount={data.length}
      />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelectorAll(".product").length).toBe(expectedLength);
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelectorAll(".empty").length).toBe(0);
  });

  test("Displays empty product list", () => {
    const emptyData = [];
    const expectedLength = emptyData.length;
    render(
      <ProductList
        items={emptyData}
        addToBasket={null}
        removeFromBasket={null}
        itemCount={emptyData.length}
      />
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelectorAll(".product").length).toBe(expectedLength);
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelectorAll(".empty").length).toBe(1);
    expect(
      screen.getByText("No items found", { exact: false })
    ).toBeInTheDocument();
  });
});
