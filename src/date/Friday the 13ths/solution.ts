export function fridayTheThirteenths(start: number, end?: number) {
  const dtStart = new Date(start, 0, 13);
  const dtEnd = new Date(end ?? start, 11, 13);
  const iterDate = dtStart;
  const dateFinded: string[] = [];
  while (iterDate <= dtEnd) {
    if (iterDate.getDay() === 5) {
      dateFinded.push(
        `${
          iterDate.getMonth() + 1
        }/${iterDate.getDate()}/${iterDate.getUTCFullYear()}`
      );
    }
    iterDate.setMonth(iterDate.getMonth() + 1); // Switch to next day
  }

  return dateFinded.join(' ');
}
