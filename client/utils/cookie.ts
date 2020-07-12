export const getExpireDate = () => {
  const date = new Date();
  date.setTime(date.getTime() + 700 * 24 * 60 * 60 * 1000);
  return date.toUTCString();
};
