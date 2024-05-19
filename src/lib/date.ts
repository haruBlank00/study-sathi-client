import { format } from "date-fns";

export const formateDate = (date: string | Date) => {
  return format(new Date(date), "MMMM d, yyyy");
};
