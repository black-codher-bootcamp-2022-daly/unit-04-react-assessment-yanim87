import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

describe("Header functionality", () => {
  test("Displays header", () => {
    const count = 0;
    render(
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header basketCount={count} />} />
        </Routes>
      </BrowserRouter>
    );
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelectorAll("a").length).toBeGreaterThanOrEqual(3);
  });
});