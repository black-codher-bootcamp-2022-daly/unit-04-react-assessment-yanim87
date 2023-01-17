import React from 'react';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../src/App";

it("renders <App/> without crashing", () => {
  render(<App />);
});
