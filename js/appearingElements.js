function handler(e) {
  document.querySelectorAll(".appearing-element").forEach(element => {
    let coords = element.getBoundingClientRect();
    if (coords.top - 500 < window.innerHeight / 1.2) {
      setTimeout(function () {
        element.classList.add("appearing-element--appeared");
      }, 400);
    }
  });
}
document.addEventListener("scroll", handler);
