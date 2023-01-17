import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import BasketTotal from '../components/BasketTotal';

describe("BasketTotal functionality", () => {

  test('Displays correct basket total', () => {
    const basketTotal = 10;
    render(<BasketTotal basketTotal={basketTotal} />);
    expect(screen.getByText(basketTotal, { exact: false })).toBeInTheDocument();
  });
});