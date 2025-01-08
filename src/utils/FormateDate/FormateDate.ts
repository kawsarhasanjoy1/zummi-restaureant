export const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const year = date.getFullYear().toString().slice(-2); // Last two digits of the year
    return `${day}-${month}-${year}`;
  };