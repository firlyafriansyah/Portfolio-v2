import homeContent from "../../pages/home/index.js";

const loadContent = (page) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const content = document.querySelector("#body-content");
      switch (this.status) {
        case 200:
          content.innerHTML = xhttp.responseText;
          if (page == "home") {
            homeContent(page);
          }

          // Show Collapsible
          const collaps = document.querySelectorAll(".collapsible");
          M.Collapsible.init(collaps, { accordion: true });
          break;
        case 404:
          content.innerHTML = `
          <h4>Halaman yang dicari tidak ditemukan!</h4>
          <img src='../../asset/img/404_illustration.svg' style='text-align: center; margin-top: 40px; width: 80%;'>
          `;
          break;
        default:
          content.innerHTML = `
          <h4>Server tidak merespon, perikasa koneksi internet anda!</h4>
          <img src='../../asset/img/server_illustration.svg' style='text-align: center; margin-top: 40px; width: 80%;'>
          `;
          "";
          break;
      }
    }
  };
  xhttp.open("GET", `pages/${page}/index.html`, true);
  xhttp.send();
};

export default loadContent;
