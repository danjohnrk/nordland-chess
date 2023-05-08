import moment from "moment";
import "moment/locale/nb";

export function createTimeLabel(date: string) {
  const dateToFormat = new Date(date);

  const matchWeek = moment(dateToFormat).week();
  const currentWeek = moment(new Date()).week();

  const timeLabel =
    matchWeek === currentWeek
      ? moment(dateToFormat).format("dddd HH:mm")
      : moment(dateToFormat).format("dd Do MMM YYYY");
  return timeLabel;
}
