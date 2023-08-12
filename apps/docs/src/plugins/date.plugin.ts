import dayjs from "dayjs";
import customFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customFormat);
export const $date = dayjs;
