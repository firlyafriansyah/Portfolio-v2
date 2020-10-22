import loadContent from "./components/Content/index.js";
import navShow from "./components/Navigation/index.js";
import footer from "./components/Footer/index.js";

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  let page = window.location.hash.substr(1);
  if (page == "") page = "home";

  console.log(page)

  if (page == "skills") {
    // navShow(page);
    loadContent(page);
    footer()
  } else {
    navShow(page);
    footer();
    loadContent(page);
  }

  

  
});
