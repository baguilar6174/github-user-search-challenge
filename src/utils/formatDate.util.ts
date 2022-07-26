/**
 *
 * @param inputDate 2022-04-08T20:08:58.305Z
 * @returns Joined 8 Abril 2022
 */
export const formatDate = (inputDate: Date): string => {
	let date, month, year;
	date = inputDate.getDate();
  month = inputDate.toLocaleString('en', { month: 'long' });
	year = inputDate.getFullYear();
	date = date.toString().padStart(2, "0");
	return `Joined ${date} ${month} ${year}`;
};
