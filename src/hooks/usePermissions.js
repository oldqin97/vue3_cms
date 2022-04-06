/*
 * @Author: qin
 * @Date: 2022-04-06 11:00:11
 * @LastEditTime: 2022-04-06 11:02:25
 * @FilePath: \vue3_cms\src\hooks\usePermissions.js
 *  -> The best way to explain it is to do it
 */

import { useStore } from 'vuex';

export function usePermissions(pageName, handleName) {
  const store = useStore();
  const permissions = store.state.login.permissions;
  const verifyPermissions = `system:${pageName}:${handleName}`;

  return !!permissions.find(item => item === verifyPermissions);
}
