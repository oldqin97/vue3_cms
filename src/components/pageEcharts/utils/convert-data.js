/*
 * @Author: qin
 * @Date: 2022-04-09 21:36:19
 * @LastEditTime: 2022-04-09 21:39:27
 * @FilePath: \vue3_cms\src\components\pageEcharts\utils\convert-data.js
 *  -> The best way to explain it is to do it
 */

import { coordinateData } from './coordinate-data';

export const convertData = function (data) {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }

  return res;
};
