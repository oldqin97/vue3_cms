/*
 * @Author: qin
 * @Date: 2022-03-29 22:57:29
 * @LastEditTime: 2022-03-29 23:10:57
 * @FilePath: \vue3_cms\src\http\main\system\index.js
 *  -> The best way to explain it is to do it
 */

import { oqRequest } from '../../index.js';

export function getPageListData(url, queryInfo) {
  return oqRequest.post({
    url: url,
    data: queryInfo,
  });
}
