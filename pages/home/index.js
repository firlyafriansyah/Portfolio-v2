import loadContent from "../../components/Content/index.js";

const homeContent = (page) => {
  document.querySelectorAll(".home-img-wrapper a").forEach((content) => {
    content.addEventListener("click", () => {
      page = content.getAttribute("href").substr(1);
      loadContent(page);
    });
  });
};

export default homeContent;
