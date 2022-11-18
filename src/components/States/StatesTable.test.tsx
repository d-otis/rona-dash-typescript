import { render, screen } from '@testing-library/react';
import { StatesTable } from '.';
import { statePlaceholderData } from '../../utilities/states';

const setup = () => {
  // render(<StatesTable data={statePlaceholderData} />);
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

    const stateNameColumn = screen.getByRole('columnheader', {
      name: /state/i,
    });
    const lastUpdateColumn = screen.getByRole('columnheader', {
      name: /last update/i,
    });
    const confirmedColumn = screen.getByRole('columnheader', {
      name: /confirmed/i,
    });
    const deathColumn = screen.getByRole('columnheader', {
      name: /deaths/i,
    });

    expect(stateNameColumn).toBeInTheDocument();
    expect(lastUpdateColumn).toBeInTheDocument();
    expect(confirmedColumn).toBeInTheDocument();
    expect(deathColumn).toBeInTheDocument();
  });
});
