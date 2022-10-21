import { currentDate, rewindDate } from './dates';

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

describe('rewindDate()', () => {
  it("returns yesterday's date in the correct format", () => {
    const yesterday = '10-19-2022';
    const today = '10-20-2022';

    expect(rewindDate(today)).toBe(yesterday);
  });
});
