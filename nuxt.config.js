import unocssConfig from "./config/uno.config.js";
import * as fs from "fs";
import { dataHelper } from "./plugins/websiteDataHelper.js";
// import { sitemap } from "./config/sitemap.js";
// import { router } from "./config/router.js";

// 生产环境打包地址
const distPath = "F:/quickwide/icms-deploy/icms-static/" + process.env.DOMIN;

// Site URL
const WEB_SITE_URL = "http://huaben.aixdb.cn/";
// process.env.ORIGIN?.startsWith("www")
//   ? "https://" + process.env.ORIGIN
//   : "https://www." + process.env.ORIGIN;

export default {
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    UPLOAD_BASE_URL: process.env.UPLOAD_BASE_URL,
    IP_ADMIN_BASE_URL: process.env.IP_ADMIN_BASE_URL,
    ORIGIN: process.env.ORIGIN,
    DB_NAME: process.env.DB_NAME,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    NODE_ENV: process.env.NODE_ENV,
    WEB_SITE_URL: WEB_SITE_URL,
    IMAGE_BASE_URL:
      process.env.NODE_ENV === "development" ? "https://icms.aixdb.cn" : "",
  },
  target: "static",
  generate: {
    cache: false,
    dir: process.env.NODE_ENV === "production" ? distPath : "dist",
  },
  css: [
    "~/static/css/reset.less",
    "~/static/css/styles.less",
    "~/static/css/css.less",
    "element-ui/lib/theme-chalk/index.css",
  ],

  plugins: [
    { src: "~/plugins/websiteDataHelper.js", mode: "server" },
    { src: "~/plugins/Swiper.js", mode: "client" },
    { src: "~/plugins/gtag.js", mode: "client" },
    { src: "~/plugins/ElementUI.js", mode: "client" },
  ],

  components: true,

  buildModules: [],
  modules: ["@nuxtjs/sitemap", "@unocss/nuxt"],
  axios: {
    proxy: true,
  },
  proxy: {
    "/api/": {
      target: process.env.BASE_URL,
      changeOrigin: true,
      pathRewrite: {},
    },
  },
  build: {
    extend(config, ctx) {
      config.node = {
        fs: "empty",
      };
    },
    extractCSS: true,
    transpile: ["vue-awesome-swiper", "websiteDataHelper"],
  },
  async routes(callback) {
    await dataHelper.init();
    const host = process.env.ORIGIN?.startsWith("www")
      ? "https://" + process.env.ORIGIN
      : "https://www." + process.env.ORIGIN;
    const result = dataHelper.websitedata.menu;
    const indexRoutes = [];
    let txtContent = `URL,changefreq,priority,lastmod\n`; // 初始化 txt 文件内容
    let htmlContent = `<html><body>`;
    function func(data) {
      for (let i = 0, len = data.length; i < len; i++) {
        if (data[i].type === "products") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 1,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "news") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 1,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "Home") {
          const item = {
            url: "",
            changefreq: "daily",
            priority: 1,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "contact") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 1,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "about-us") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 1,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "knowledge") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 1,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "productsclass") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 0.8,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "newsclass") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 0.8,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "knowledgeclass") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 0.8,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "productsdetail") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 0.6,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "newsdetail") {
          const item = {
            // url: data[i].path + '/',
            url: data[i].path,
            changefreq: "daily",
            priority: 0.6,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }
        if (data[i].type === "knowledgedetail") {
          const item = {
            // url: data[i].path + '/',
            changefreq: "daily",
            priority: 0.6,
            lastmod: new Date(),
          };
          indexRoutes.push(item);
          txtContent +=
            host +
            item.url +
            "," +
            item.changefreq +
            "," +
            item.priority +
            "," +
            item.lastmod +
            "\n"; // 将 url 添加到 txt 文件内容
        }

        // add sitemap.html
        htmlContent += `<a href="${data[i].path}">${data[i].path}</a><br>`;

        if (data[i].children) {
          func(data[i].children);
        }
      }
    }
    func(result);

    htmlContent += `</body></html>`;

    // 写入 txt 文件
    await new Promise((resolve, reject) => {
      fs.writeFile("static/sitemap.txt", txtContent, "utf8", err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    await new Promise((resolve, reject) => {
      fs.writeFile("static/sitemap.html", htmlContent, "utf8", err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    // 调用回调函数生成 XML 文件
    callback(null, indexRoutes);
  },
  router: {
    async extendRoutes(routes, resolve) {
      await dataHelper.init();

      routes.splice(0);
      const result = dataHelper.websitedata.menu;
      async function get_total(nodeid, type) {
        return await dataHelper.getList(type, nodeid).count;
      }
      const _routes = Array.of();

      function page_routes(type, total, nodeid, tdk) {
        let size = Math.ceil(total / 12);
        for (let i = 1, len = size; i <= len; i++) {
          _routes.push({
            name: type + i,
            path: `/${type}/page-${i}`,
            component: `pages/${type}/index.vue`,
            meta: {
              page: i,
              nodeid,
              ...tdk,
            },
            query: {
              size,
            },
          });
        }
      }

      function page_routes_news(type, total, nodeid, tdk) {
        let size = Math.ceil(total / 12);
        for (let i = 1, len = size; i <= len; i++) {
          _routes.push({
            name: type + i,
            path: `/${type}/page-${i}`,
            component: `pages/${type}/index.vue`,
            meta: {
              page: i,
              nodeid,
              ...tdk,
            },
            query: {
              size,
            },
          });
        }
      }

      function page_routes_knowledge(type, total, nodeid, tdk) {
        let size = Math.ceil(total / 12);
        for (let i = 1, len = size; i <= len; i++) {
          _routes.push({
            name: type + i,
            path: `/knowledge/page-${i}`,
            component: `pages/${type}/index.vue`,
            meta: {
              page: i,
              nodeid,
              ...tdk,
            },
            query: {
              size,
            },
          });
        }
      }

      function page_routes_news_categories(type, url, total, nodeid, tdk) {
        let size = Math.ceil(total / 12);
        url = url.substring(1);
        type = type.substring(0, type.indexOf("class"));
        for (let i = 1, len = size; i <= len; i++) {
          _routes.push({
            name: nodeid + i,
            path: `/${url}/page-${i}`,
            component: `pages/${type}/index.vue`,
            meta: {
              page: i,
              nodeid,
              ...tdk,
            },
            query: {
              size,
            },
          });
        }
      }

      function page_routes_knowledge_categories(type, url, total, nodeid, tdk) {
        let size = Math.ceil(total / 12);
        url = url.substring(1);
        type = type.substring(0, type.indexOf("class"));
        for (let i = 1, len = size; i <= len; i++) {
          _routes.push({
            name: nodeid + i,
            path: `/${url}/page-${i}`,
            component: `pages/${type}s/index.vue`,
            meta: {
              page: i,
              nodeid,
              ...tdk,
            },
            query: {
              size,
            },
          });
        }
      }

      function page_routes_categories(type, url, total, nodeid, tdk) {
        let size = Math.ceil(total / 12);
        url = url.substring(1);
        type = type.substring(0, type.indexOf("class"));
        for (let i = 1, len = size; i <= len; i++) {
          _routes.push({
            name: nodeid + i,
            path: `/${url}/page-${i}`,
            component: `pages/${type}/_categories/index.vue`,
            meta: {
              page: i,
              nodeid,
              ...tdk,
            },
            query: {
              size,
            },
          });
        }
      }

      // 替换 TDK 占位符
      function amendTDK(tdk, a, b) {
        tdk.title = tdk.title.replaceAll(a, b);
        tdk.description = tdk.description.replaceAll(a, b);
        tdk.keywords = tdk.keywords.replaceAll(a, b);
      }

      async function func(data) {
        for (let i = 0, len = data.length; i < len; i++) {
          const tdk = {
            title: data[i].title ?? "",
            description: data[i].description ?? "",
            keywords: data[i].keywords ?? "",
          };

          switch (data[i].type) {
            case "productsdetail":
              amendTDK(tdk, "产品名称", data[i].name_ch);
              break;
            case "newsdetail":
              amendTDK(tdk, "新闻标题", data[i].name_ch);
              break;
            case "knowledgedetail":
              amendTDK(tdk, "软文标题", data[i].name_ch);
              break;
          }

          if (data[i].type === "products") {
            data[i].component = resolve(__dirname, "pages/products/index.vue");
            let total = await get_total(data[i].name, "products");
            page_routes(data[i].type, total, data[i].name, tdk);
          }
          if (data[i].type === "productsclass") {
            data[i].component = resolve(
              __dirname,
              "pages/products/_categories/index.vue",
            );
            let total = await get_total(data[i].name, "products");
            page_routes_categories(
              data[i].type,
              data[i].path,
              total,
              data[i].name,
              tdk,
            );
          }
          if (data[i].type === "productsdetail") {
            data[i].component = resolve(
              __dirname,
              "pages/products/_categories/_detail/index.vue",
            );
          }
          if (data[i].type === "news") {
            data[i].component = resolve(__dirname, "pages/news/index.vue");
            let total = await get_total(data[i].name, "news");
            page_routes_news(data[i].type, total, data[i].name, tdk);
          }
          if (data[i].type === "newsclass") {
            data[i].component = resolve(__dirname, "pages/news/index.vue");
            let total = await get_total(data[i].name, "news");
            page_routes_news_categories(
              data[i].type,
              data[i].path,
              total,
              data[i].name,
              tdk,
            );
          }
          if (data[i].type === "newsdetail") {
            data[i].component = resolve(
              __dirname,
              "pages/news/_detail/index.vue",
            );
          }
          if (data[i].type === "knowledge") {
            data[i].component = resolve(
              __dirname,
              "pages/knowledges/index.vue",
            );
            let total = await get_total(data[i].name, "knowledge");
            page_routes_knowledge("knowledges", total, data[i].name, tdk);
          }
          if (data[i].type === "knowledgeclass") {
            data[i].component = resolve(
              __dirname,
              "pages/knowledges/index.vue",
            );
            let total = await get_total(data[i].name, "knowledge");
            page_routes_knowledge_categories(
              data[i].type,
              data[i].path,
              total,
              data[i].name,
              tdk,
            );
          }
          if (data[i].type === "knowledgedetail") {
            data[i].component = resolve(
              __dirname,
              "pages/knowledges/_detail/index.vue",
            );
          }
          if (data[i].type === "Home") {
            data[i].path = "/";
            data[i].component = resolve(__dirname, "pages/index.vue");
          }
          if (data[i].type === "contact") {
            data[i].component = resolve(__dirname, "pages/contactUs/index.vue");
          }
          if (data[i].type === "about-us") {
            data[i].component = resolve(__dirname, "pages/aboutUs/index.vue");
          }
          _routes.push({
            name: data[i].name,
            path: data[i].path,
            component: data[i].component,
            meta: {
              nodeid: data[i].name,
              grandId: data[i].grandId || undefined,
              type: data[i].ID || undefined,
              name: data[i].type || undefined,
              ...tdk,
            },
          });
          if (data[i].children) {
            await func(data[i].children);
          }
        }
      }
      await func(result);
      _routes.push({
        name: "search",
        path: "/search",
        component: "pages/search/index.vue",
      });
      _routes.push({
        name: "404",
        path: "/search/404",
        component: "pages/search/404/index.vue",
      });
      _routes.push({
        name: "thanks",
        path: "/thanks",
        component: "pages/thanks/index.vue",
      });
      routes.push(..._routes);
    },
  },
  unocss: unocssConfig,
  sitemap: {
    hostname: process.env.ORIGIN?.startsWith("www")
      ? "https://" + process.env.ORIGIN
      : "https://www." + process.env.ORIGIN,
    // 排除不要页面
    exclude: ["/search", "/404", "/"],
    defaults: {
      changefreq: "daily",
      lastmod: new Date(),
      priority: 0.8,
    },
    // 生成 .xml.gz 压缩的 sitemap
    gzip: true,
    async routes(callback) {
      await dataHelper.init();
      const host = process.env.ORIGIN?.startsWith("www")
        ? "https://" + process.env.ORIGIN
        : "https://www." + process.env.ORIGIN;
      const result = dataHelper.websitedata.menu;
      const indexRoutes = [];
      let txtContent = `URL,changefreq,priority,lastmod\n`; // 初始化 txt 文件内容
      let htmlContent = `<html><body>`;
      function func(data) {
        for (let i = 0, len = data.length; i < len; i++) {
          if (data[i].type === "products") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 1,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "news") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 1,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "Home") {
            const item = {
              url: "",
              changefreq: "daily",
              priority: 1,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "contact") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 1,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "about-us") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 1,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "knowledge") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 1,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "productsclass") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 0.8,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "newsclass") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 0.8,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "knowledgeclass") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 0.8,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "productsdetail") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 0.6,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "newsdetail") {
            const item = {
              // url: data[i].path + '/',
              url: data[i].path,
              changefreq: "daily",
              priority: 0.6,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }
          if (data[i].type === "knowledgedetail") {
            const item = {
              // url: data[i].path + '/',
              changefreq: "daily",
              priority: 0.6,
              lastmod: new Date(),
            };
            indexRoutes.push(item);
            txtContent +=
              host +
              item.url +
              "," +
              item.changefreq +
              "," +
              item.priority +
              "," +
              item.lastmod +
              "\n"; // 将 url 添加到 txt 文件内容
          }

          // add sitemap.html
          htmlContent += `<a href="${data[i].path}">${data[i].path}</a><br>`;

          if (data[i].children) {
            func(data[i].children);
          }
        }
      }
      func(result);

      htmlContent += `</body></html>`;

      // 写入 txt 文件
      await new Promise((resolve, reject) => {
        fs.writeFile("static/sitemap.txt", txtContent, "utf8", err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });

      await new Promise((resolve, reject) => {
        fs.writeFile("static/sitemap.html", htmlContent, "utf8", err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });

      // 调用回调函数生成 XML 文件
      callback(null, indexRoutes);
    },
  },
};
