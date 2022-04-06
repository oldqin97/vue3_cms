/*
 * @Author: qin
 * @Date: 2022-03-29 22:57:29
 * @LastEditTime: 2022-04-06 11:47:48
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

// url: /users/id
export function deletePageDataById(url) {
  return oqRequest.delete({ url });
}
