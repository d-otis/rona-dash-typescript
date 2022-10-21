import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export const currentDate = (): string => {
  return dayjs().format('MM-DD-YYYY');
};

export const rewindDate = (date: string): string => {
  const oneDayBack = dayjs(date, 'MM-DD-YYYY').subtract(1, 'day');
  return dayjs(oneDayBack).format('MM-DD-YYYY');
};
