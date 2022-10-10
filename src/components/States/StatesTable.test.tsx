import { render, screen } from '@testing-library/react';
import { StatesTable } from '.';

const setup = () => {
  render(<StatesTable />);
};

describe('StatesTable', () => {
  it('renders on the page', () => {
    setup();
    const header = screen.getByText(/u\.s\. states/i);
    expect(header).toBeInTheDocument();
  });

  it('has the required columns', () => {
    setup();

    const stateNameColumn = screen.getByText(/state/i);
    const lastUpdateColumn = screen.getByText(/last update/i);
    const confirmedColumn = screen.getByText(/confirmed/i);
    const deathColumn = screen.getByText(/death/i);

    expect(stateNameColumn).toBeInTheDocument();
    expect(lastUpdateColumn).toBeInTheDocument();
    expect(confirmedColumn).toBeInTheDocument();
    expect(deathColumn).toBeInTheDocument();
  });
});
