const footer = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status != 200) return;

      document.querySelector(".footer").innerHTML = xhttp.responseText;
    }
  };

  xhttp.open("GET", "components/Footer/index.html", true);
  xhttp.send();
};

export default footer;
