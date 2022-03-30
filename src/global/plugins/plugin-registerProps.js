/*
 * @Author: qin
 * @Date: 2022-03-30 17:25:35
 * @LastEditTime: 2022-03-30 17:32:46
 * @FilePath: \vue3_cms\src\global\plugins\plugin-registerProps.js
 *  -> The best way to explain it is to do it
 */
import { formatUtcString } from '@/utils/dateFormat.js';

export default function registerProperties(app) {
  app.config.globalProperties.$filters = {
    formatTime(utcTime) {
      return formatUtcString(utcTime);
    },
  };
}
