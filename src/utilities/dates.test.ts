import { currentDate, rewindDate } from './dates';
import dayjs from 'dayjs';

describe('currentDate()', () => {
  it('returns the date in the correct format', () => {
    // date format: 10-01-2022
    const today = dayjs().format('MM-DD-YYYY');

    expect(currentDate()).toBe(today);
  });
});

describe('rewindDate()', () => {
  it("returns yesterday's date in the correct format", () => {
    const today = dayjs().format('MM-DD-YYYY');
    const yesterday = dayjs(today, 'MM-DD-YYYY')
      .subtract(1, 'day')
      .format('MM-DD-YYYY');

    expect(rewindDate(today)).toBe(yesterday);
  });
});
