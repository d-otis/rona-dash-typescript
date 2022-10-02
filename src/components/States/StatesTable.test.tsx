import { render, screen } from '@testing-library/react';
import { StatesTable } from '.';

describe('StatesTable', () => {
  it('renders on the page', () => {
    render(<StatesTable />);
    const header = screen.getByText(/states table/i);
    expect(header).toBeInTheDocument();
  });
});
