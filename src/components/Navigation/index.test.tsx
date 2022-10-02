import { render, screen } from '@testing-library/react';
import Navigation from './index';
import { CONTINENTS } from '../../utilities/continents';

const setup = () => {
  render(<Navigation continents={CONTINENTS} />);
};

describe('Navigation', () => {
  it('loads with correct title', () => {
    setup();
    const title = screen.getByText(/rona dash/i);
    expect(title).toBeInTheDocument();
  });

  it('includes all the require menu items', () => {
    setup();
    const globalLink = screen.getByText(/global/i);
    const continents = screen.getByText(/continents/i);
    const countries = screen.getByText(/countries/i);
    const usStates = screen.getByText('US States');
    const about = screen.getByText(/about/i);
    const refresh = screen.getByText(/refresh/i);

    expect(globalLink).toBeInTheDocument();
    expect(continents).toBeInTheDocument();
    expect(countries).toBeInTheDocument();
    expect(usStates).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(refresh).toBeInTheDocument();
  });
});
