/*
 * @Author: qin
 * @Date: 2022-03-30 17:29:53
 * @LastEditTime: 2022-03-30 17:32:02
 * @FilePath: \vue3_cms\src\utils\dateFormat.js
 *  -> The best way to explain it is to do it
 */

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export function formatUtcString(
  utcString,
  format = DATE_TIME_FORMAT,
) {
  return dayjs.utc(utcString).format(format);
}
