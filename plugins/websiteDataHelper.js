import axios from "axios";
class websiteDataHelper {
  constructor() {
    this.isInit = false;
  }
  async init() {
    if (this.isInit) return;

    // 获取到website的完整数据
    const res = await axios({
      baseURL: process.env.BASE_URL,
      url: "/api/appapi/website/data",
      // url: "/websitedata.json",
      type: "GET",
      params: {
        DynamicDbConnectName: process.env.DB_NAME,
      },
    });

    this.websitedata = res.data.result.data;
    this.headerMenu = this._buildHeaderMenu();
    this.hotProducts = this.websitedata.products.filter(
      item => item.labels && item.labels.includes("hot"),
    );
    this.products = this.getProducts();
    this.productsAll = this.getProductsAll();
    this.hotKnowledge = this.websitedata.knowledge.filter(
      item => item.labels && item.labels.includes("hot"),
    );
    this.hotNews = this.websitedata.news.filter(
      item => item.labels && item.labels.includes("hot"),
    );
    this.pcbanner = this.getpcbanner();
    this.homeIntro = this.websitedata.home_introduction[0];
    this.isInit = true;
  }
  // 查询分类数据
  getCategories(tablename, glid) {
    const class_table =
      tablename == "products"
        ? "product_class"
        : tablename == "news"
        ? "news_class"
        : "knowledge_class";
    if (!this.websitedata[class_table]) return undefined;

    let data = this.websitedata[class_table].filter(
      item => item.parentid == glid,
    );
    //如果glid下没有下级分类了，则取glid父亲的下属分类
    if (data.length == 0) {
      let item_glid = this.websitedata[class_table].find(
        item => item.ID == glid,
      );
      data = this.websitedata[class_table].filter(
        item => item.parentid == item_glid.parentid,
      );
    }
    data = data.concat(
      this.websitedata["menu"].filter(item => item.parentid == glid),
    );
    data = data.filter(item => item);
    return data;
  }
  getMenuItemBanner(type = "products") {
    const menu = this.headerMenu;
    const result = menu.find(v => v.type === type);
    return result?.bannerurl || "";
  }
  // 查询列表页数据
  getList(tablename, glid, currentPage = 1, pageSize = 12) {
    const menu = this.websitedata.menu;
    const menuitem = this._findmenuitem(glid, menu);
    const classids = [];
    this._gatherclassids(menuitem, classids);
    const list = this.websitedata[tablename]?.filter(item =>
      classids.includes(item.glid),
    );
    const res = {
      list: list?.slice((currentPage - 1) * pageSize, currentPage * pageSize),
      count: list?.length,
    };
    return res;
  }

  // 查询上一条、下一条数据
  getsblings(tablename, glid, id) {
    const menu = this.websitedata.menu;
    const menuitem = this._findmenuitem(glid, menu);
    const classids = [];
    this._gatherclassids(menuitem, classids);
    const list = this.websitedata[tablename].filter(item =>
      classids.includes(item.glid),
    );
    const index = list.findIndex(item => item.ID == id);
    const res = {};
    if (list[index - 1]) res.prev = list[index - 1];
    if (list[index + 1]) res.next = list[index + 1];
    return res;
  }

  // 查询详情页数据
  getDetail(tablename, id) {
    const data = {
      detail: this.websitedata[tablename].find(item => item.ID == id),
    };
    if (tablename == "products" || tablename == "knowledge") {
      if (data.detail && data.detail.glProductIds) {
        const glProductIds =
          typeof data.detail.glProductIds === "string"
            ? data.detail.glProductIds
            : JSON.stringify(data.detail.glProductIds);
        data.detail.glProducts = this.websitedata["products"].filter(item =>
          glProductIds.includes(item.ID),
        );
      }
      if (data.detail && data.detail.glKnowledgeIds) {
        const glKnowledgeIds =
          typeof data.detail.glKnowledgeIds === "string"
            ? data.detail.glKnowledgeIds
            : JSON.stringify(data.detail.glKnowledgeIds);
        data.detail.glKnowledges = this.websitedata["knowledge"].filter(item =>
          glKnowledgeIds.includes(item.ID),
        );
      }
    }

    if (this.websitedata["product_pic"]) {
      data.detail.productPics = this.websitedata["product_pic"].find(
        item => item.glid == id,
      );
    }

    return data;
  }
  getBaseInfo() {
    try {
      const emails = [];
      const types = ["email", "email2"];
      types.forEach(item => {
        const email = this.websitedata.base_info[0][item] || "";
        if (email) emails.push(email);
      });
      const nextBaseInfo = this.websitedata.base_info[0];
      nextBaseInfo["email"] = emails.flat(Infinity);
      return nextBaseInfo;
    } catch (error) {
      return {};
    }
  }
  // 查询header组件需要的全部数据
  getHeaderData(route) {
    const knowledge=this.websitedata.knowledge?.slice(0,2)
    const piclogo = this.websitedata.site_pic[0];
    const contactShare = this.websitedata.contact_share[0];
    const visitthird = this.websitedata.base_info[0];
    const type = route.meta[0] ? route.meta[0].type : "";
    // 传递语言筛选
    // 先对process.env.origin_m01进行判断，统一格式为https://
    let origin =
      process.env.ORIGIN?.indexOf("https://") != -1
        ? process.env.ORIGIN
        : "https://" + process.env.ORIGIN;
    //判断process.env.origin_m01中是否含有'www.'，如果有就去掉
    if (origin?.indexOf("www.") != -1) {
      origin = origin?.split("www.")[0] + origin?.split("www.")[1];
    }
    return {
      type: type ? type : "",
      menu: this.headerMenu ? this.headerMenu : "",
      piclogo: piclogo ? piclogo : "",
      contactShare: contactShare ? contactShare : "",
      origin: origin,
      icmsdb: process.env.DB_NAME,
      pathPage: route.path ? route.path : "",
      visitthird: visitthird ? visitthird : "",
      knowledge:knowledge ? knowledge:'',
    };
  }

  // 查询footer组件需要的全部数据
  getFooterData() {
    const piclogo = this.websitedata.site_pic[0];
    // const menu = this.websitedata.menu;
    const bci = this.websitedata.bottom_contact[0];
    const bi = this.websitedata.home_introduction[0];
    const productsList = this.headerMenu.find(
      item => item.type == "products",
    ).children;
    const contactShare = this.websitedata.contact_share[0];
    const visitthird = this.websitedata.base_info[0];

    return {
      piclogo: piclogo ? piclogo : "",
      menu: this.headerMenu ? this.headerMenu : "",
      bci: bci ? bci : "",
      productsList: productsList ? productsList : "",
      bi: bi ? bi : "",
      contactShare: contactShare ? contactShare : "",
      visitthird: visitthird ? visitthird : "",
      inquiry: process.env.DB_NAME,
    };
  }

  // 查询wmkc组件需要的全部数据
  getwmkcData(route) {
    const contactShare = this.websitedata.contact_share[0];
    return {
      contactShare: contactShare ? contactShare : "",
      pathPage: route.path ? route.path : "",
      icmsdb: process.env.DB_NAME,
    };
  }

  // 收集某个菜单项下的所有子菜单的id集合，根据menu树的数据进行递归查询;
  _gatherclassids(menuitem, classids) {
    if (menuitem.type.endsWith("detail")) return;
    classids.push(menuitem.ID);
    if (menuitem.children.length > 0) {
      for (const item of menuitem.children) {
        this._gatherclassids(item, classids);
      }
    }
  }

  // 遍历某个菜单项集合及其孩子菜单项集合，找到ID为glid的菜单项;
  _findmenuitem(glid, nodes) {
    let item = nodes.find(item1 => item1.ID == glid);
    if (item) return item;
    for (const item1 of nodes) {
      if (item1.type.endsWith("detail")) return;
      if (item1.children.length > 0) {
        item = this._findmenuitem(glid, item1.children);
        if (item) return item;
      }
    }
    return undefined;
  }

  _buildHeaderMenu() {
    const headerMenu = JSON.parse(JSON.stringify(this.websitedata.menu));
    this._cleareDetails(headerMenu.find(item => item.type == "products"));
    this._cleareDetails(headerMenu.find(item => item.type == "knowledge"));
    this._cleareDetails(headerMenu.find(item => item.type == "news"));
    return headerMenu;
  }

  _cleareDetails(node) {
    node.children = node.children.filter(item => !item.type.endsWith("detail"));
    for (let item of node.children) {
      if (item.children) item = this._cleareDetails(item);
    }
  }

  getpcbanner() {
    const pcbanner1 = this.websitedata.site_pic_pcbanner.filter(
      item => item.glid == this.websitedata.site_pic[0].ID,
    );
    pcbanner1.sort((a, b) => {
      return a.sort - b.sort;
    });
    const pcbanner2 = [];
    for (let item of pcbanner1) {
      let obj = { url: item.url };
      if (item.type) obj.type = item.type;
      pcbanner2.push(obj);
    }
    return pcbanner2;
  }
  getProducts() {
    const data = this.getProductsAll();

    const productsList = data.reduce((acc, item) => {
      const existingItem = acc.find(elem => elem.name === item.className);
      if (existingItem) {
        existingItem.children.push(item);
      } else {
        acc.push({ name: item.className, path: item.path, children: [item] });
      }
      return acc;
    }, []);
    return productsList;
  }
  getProductsAll() {
    return this.websitedata.products || [];
  }
  getProductClassYypeDes() {
    return [(this.websitedata.product_class[0] || {}).typeDes];
  }
}

const dataHelper = new websiteDataHelper();

export { dataHelper };

export default async ({ app, $config }, inject) => {
  await dataHelper.init();
  app.$websiteDataHelper = dataHelper;
};
