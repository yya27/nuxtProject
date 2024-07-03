const tracks = ["email", "skype", "whatsApp"];

function handleTrackEvent(event) {
  let target = event.target;
  while (target !== document.body) {
    // const dataTrack = target.getAttribute("data-track");
    const dataTrack = target.dataset.type || null;
    if (dataTrack && tracks.includes(dataTrack)) {
      console.dir(target);
      const form = target.children[0].href;
      const url = new URL("https://ipadmin.aixdb.cn/ipadmin/api/ask/addrecord");
      url.searchParams.append("pathPage", window.location.href);
      url.searchParams.append("type", dataTrack);
      url.searchParams.append("form", form);
      url.searchParams.append(
        "DynamicDbConnectName",
        "icms_en_3693f200061511ef9fdcc75c12c2ee5b", //替换为真实的，不要用环境变量
      );
      console.log(url);
      //   fetch(url);
      break;
    }
    target = target.parentNode;
  }
}

window.addEventListener("load", () => {
  document.body.addEventListener("click", handleTrackEvent);
});
