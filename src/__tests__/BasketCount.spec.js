import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import BasketCount from '../components/BasketCount';

describe("BasketCount functionality", () => {

  test('Displays correct basket count', () => {
    const count = 10;
    render(<BasketCount basketCount={count} />);
    expect(screen.getByText(`${count} items`)).toBeInTheDocument();
  });
});