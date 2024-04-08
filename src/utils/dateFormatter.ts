// Create a function to format the current date to "DD/MM/YYYY" format
export default function dateFormatter(date: Date): string {
  const formattedDate: string = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formattedDate;
}
