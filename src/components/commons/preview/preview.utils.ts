export const getTotalOfDays = (start?: Date, end?: Date) => {
  if (!start || !end) {
    return 0;
  }
  const timeStart = start.getTime();
  const timeEnd = end.getTime();
  if (Number.isNaN(timeEnd) || Number.isNaN(timeStart)) {
    return 0;
  }
  const difference = timeEnd - timeStart;
  const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays;
};
