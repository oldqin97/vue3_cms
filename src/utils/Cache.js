/*
 * @Author: qin
 * @Date: 2022-03-17 23:21:52
 * @LastEditTime: 2022-03-17 23:25:09
 * @FilePath: \vue3_cms\src\utils\Cache.js
 *  -> The best way to explain it is to do it
 */

class LocalCache {
  setCache(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key) {
    const value = window.localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  }

  deleteCache(key) {
    window.localStorage.removeItem(key);
  }

  clearCache() {
    window.localStorage.clear();
  }
}

export default new LocalCache();
