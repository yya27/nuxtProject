const isHome = window.location.pathname === "/";
const init = () => {
  // 操作dom需谨慎
  try {
    const nav = document.querySelector(".nav");
    const bannerBox = document.querySelector(".banner-box");

    if (!isHome) {
      nav.style.backgroundColor = "#ffffff";
    }
  } catch (error) {}
  const handleScroll = () => {
    try {
      const nav = document.querySelector(".nav");
      const bannerBox = document.querySelector(".banner-box");
      // const navMenu = document.querySelector(".nav_menu");
      const navLanguage = document.querySelector(".nav_language");
      const scrollDistance = window.scrollY;
      const bannerBoxTop = bannerBox?.offsetHeight;
      // if (scrollDistance >= 48) {
      //   nav.style.top = "0px";
      // } else {
      //   nav.style.top = "48px";
      // }

      if (scrollDistance > bannerBoxTop - 100 && isHome) {
        nav.style.backgroundColor = "#ffffff";
        navLanguage.style.backgroundColor = "#333";
      } else {
        nav.style.backgroundColor = "";
        navLanguage.style.backgroundColor = "rgba(51,51,51,0.05)";
      }
    } catch (error) {
      console.log(error);
    }
  };

  let ticking = false;
  handleScroll();
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
};
document.addEventListener("DOMContentLoaded", init);
