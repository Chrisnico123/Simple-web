function detail() {
  document.getElementById("btn1").addEventListener("click", () => {
    detail = document.getElementById("detail");
    if (detail.hidden == true) {
      detail.hidden = false;
      document.getElementById("btn1").innerHTML = "Close";
    } else {
      detail.hidden = true;
      document.getElementById("btn1").innerHTML = "Selengkapnya";
    }
  });
}
function detail1() {
  document.getElementById("btn2").addEventListener("click", () => {
    detail = document.getElementById("detail1");
    if (detail.hidden == true) {
      detail.hidden = false;
      document.getElementById("btn2").innerHTML = "Close";
    } else {
      detail.hidden = true;
      document.getElementById("btn2").innerHTML = "Selengkapnya";
    }
  });
}
