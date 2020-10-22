import loadContent from "../Content/index.js";

const showNav = (page) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status != 200) return;

      document.querySelectorAll(".topnav, .sidenav").forEach((content) => {
        content.innerHTML = xhttp.responseText;
      });

      document.querySelectorAll(".sidenav a, .topnav a").forEach((content) => {
        content.addEventListener("click", (event) => {
          const sidenav = document.querySelector(".sidenav");
          M.Sidenav.getInstance(sidenav).close();

          page = event.target.getAttribute("href").substr(1);
          loadContent(page);
        });
      });
    }
  };
  xhttp.open("GET", "components/Navigation/index.html", true);
  xhttp.send();
};

export default showNav;
