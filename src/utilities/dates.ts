export const currentDate = (): string => {
  return new Date().toLocaleString('en-US').replaceAll('/', '-').split(',')[0];
};
