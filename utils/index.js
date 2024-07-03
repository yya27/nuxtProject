export function isMobile() {
  let ua = window.navigator.userAgent;
  return /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/.test(
    ua,
  );
}

export function getCurrentMenu(menu, currentRoute) {
  for (const m of menu) {
    if (m.name === currentRoute.meta[0]?.nodeid) {
      return m;
    }

    if (m.children) {
      const currentMenu = getCurrentMenu(m.children, currentRoute);

      if (currentMenu) {
        return currentMenu;
      }
    }
  }

  return undefined;
}

export function setHomeToRoot(menu) {
  menu.forEach(e => {
    if (e.type == "Home") {
      e.path = "/";
    }
  });
}
export const formatDate = dateString => {
  const date = new Date(dateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  const formattedDate = `${month} ${day} ${year}`;
  return formattedDate;
};
