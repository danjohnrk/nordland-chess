import moment from "moment";
import "moment/locale/nb";

export function createTimeLabel(date: string) {
  const dateToFormat = new Date(date);
  return moment(dateToFormat).format("dd Do MMM YYYY");
}
