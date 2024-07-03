import { getCurrentMenu, setHomeToRoot } from "~/utils";

export const state = () => ({
  favicon: "",
  menu: null,
  currentMenu: null,
  headerData: null,
  footerData: null,
  wmkcData: null,
  baseInfo: {},
  baseImageUrl: process.env,
});

export const mutations = {
  setState(state, { key, value }) {
    state[key] = value;
  },
};

export const actions = {
  nuxtServerInit({ commit }, { app, route }) {
    const [sitePic] = app.$websiteDataHelper.websitedata.site_pic;
    // 设置图标
    commit("setState", { key: "favicon", value: sitePic?.icourl });

    // 设置菜单
    const menu = app.$websiteDataHelper.headerMenu;
    setHomeToRoot(menu);
    commit("setState", { key: "menu", value: menu });

    // 设置当前菜单
    const currentMenu = getCurrentMenu(menu, route);
    commit("setState", { key: "currentMenu", value: currentMenu });

    // 设置头部和底部数据
    const headerData = app.$websiteDataHelper.getHeaderData(route);
    const footerData = app.$websiteDataHelper.getFooterData();
    commit("setState", { key: "headerData", value: headerData });
    commit("setState", { key: "footerData", value: footerData });

    // 设置 wmkcData 数据
    const wmkcData = app.$websiteDataHelper.getwmkcData(route);
    commit("setState", { key: "wmkcData", value: wmkcData });

    // 设置 baseInfo 数据
    const baseInfo = app.$websiteDataHelper.getBaseInfo() || {};
    commit("setState", { key: "baseInfo", value: baseInfo });
  },
};
