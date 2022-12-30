import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Portfolio from './Portfolio';

describe('<Portfolio />', () => {
  test('it should mount', () => {
    render(<Portfolio />);
    
    const portfolio = screen.getByTestId('Portfolio');

    expect(portfolio).toBeInTheDocument();
  });
});