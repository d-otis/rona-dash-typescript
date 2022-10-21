import { currentDate } from './dates';

describe('currentDate()', () => {
  it('returns the date in the correct format', () => {
    // date format 10-01-2022
    const today = new Date()
      .toLocaleString('en-US')
      .replaceAll('/', '-')
      .split(',')[0];

    expect(currentDate()).toBe(today);
  });
});
