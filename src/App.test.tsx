import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the Navigation', () => {
    render(<App />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
