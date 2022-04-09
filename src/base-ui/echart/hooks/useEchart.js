/*
 * @Author: qin
 * @Date: 2022-04-09 20:20:54
 * @LastEditTime: 2022-04-09 20:24:11
 * @FilePath: \vue3_cms\src\base-ui\echart\hooks\useEchart.js
 *  -> The best way to explain it is to do it
 */

import * as echart from 'echarts';

import chinaMapData from '../data/china.json';

echart.registerMap('china', chinaMapData);

export default function (el) {
  const echartInstance = echart.init(el);

  const setOptions = options => {
    echartInstance.setOption(options);
  };

  const updateSize = () => {
    echartInstance.resize();
  };

  window.addEventListener('resize', () => {
    echartInstance.resize();
  });

  return {
    echartInstance,
    setOptions,
    updateSize,
  };
}
