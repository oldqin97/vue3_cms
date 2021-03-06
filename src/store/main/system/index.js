/*
 * @Author: qin
 * @Date: 2022-03-29 22:10:51
 * @LastEditTime: 2022-04-08 15:43:19
 * @FilePath: \vue3_cms\src\store\main\system\index.js
 *  -> The best way to explain it is to do it
 */

import {
  getPageListData,
  deletePageDataById,
  createPageData,
  editPageData,
} from '@/http/main/system';
import LocalCache from '@/utils/Cache.js';

const systemModule = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
    };
  },
  getters: {
    pageListData(state) {
      return pageName => {
        return state[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return pageName => state[`${pageName}Count`];
    },
  },
  mutations: {
    changeUsersList(state, usersList) {
      LocalCache.setCache('usersList', usersList);
      state.usersList = usersList;
    },

    changeUsersCount(state, usersCount) {
      LocalCache.setCache('usersCount', usersCount);
      state.usersCount = usersCount;
    },

    changeRoleList(state, roleList) {
      LocalCache.setCache('roleList', roleList);
      state.roleList = roleList;
    },

    changeRoleCount(state, roleCount) {
      LocalCache.setCache('roleCount', roleCount);
      state.roleCount = roleCount;
    },

    changeGoodsList(state, goodsList) {
      LocalCache.setCache('goodsList', goodsList);
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount) {
      LocalCache.setCache('goodsCount', goodsCount);
      state.goodsCount = goodsCount;
    },

    changeMenuList(state, menuList) {
      LocalCache.setCache('menuList', menuList);
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount) {
      LocalCache.setCache('menuCount', menuCount);
      state.menuCount = menuCount;
    },
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const pageName = payload?.pageName;
      let pageUrl = '';

      switch (pageName) {
        case 'users':
          pageUrl = '/users/list';
          break;
        case 'role':
          pageUrl = '/role/list';
          break;
        case 'goods':
          pageUrl = '/goods/list';
          break;
        case 'menu':
          pageUrl = '/menu/list';
          break;
      }
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1);

      // ~ ????????????
      const pageResult = await getPageListData(
        pageUrl,
        payload.queryInfo,
      );
      const { list, totalCount } = pageResult?.data;
      commit(`change${changePageName}List`, list);
      commit(`change${changePageName}Count`, totalCount);

      // switch (pageName) {
      //   case 'user':
      //     commit(`change${changePageName}List`, userList);
      //     commit(`change${changePageName}Count`, userCount);
      //     break;
      //   case 'role':
      //     commit(`change${changePageName}List`, roleList);
      //     commit(`change${changePageName}Count`, roleCount);
      //     break;
      // }
    },

    async deletePageDataAction({ dispatch }, payload) {
      // ? pageName -> /users
      // ? id -> /users/id

      // + ??????url
      let { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      // + ??????????????????
      const data = await deletePageDataById(pageUrl);

      // + ????????????????????????
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
      return data;
    },
    // ~ ????????????
    async createPageDataAction({ dispatch }, payload) {
      console.log(payload);
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;

      await createPageData(pageUrl, newData);
      // + ?????????????????????
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
    // ~ ????????????
    async editPageDataAction({ dispatch }, payload) {
      const { pageName, editData, id } = payload;
      let pageUrl = `/${pageName}/${id}`;

      await editPageData(pageUrl, editData);
      // + ??????????????????
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
  },
};

export default systemModule;
