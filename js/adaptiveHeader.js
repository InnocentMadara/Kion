let wrapper = document.querySelector(".header__wrapper");

// .header__burger-button--open
document
  .querySelector(".header__burger-button--open")
  .addEventListener("click", function (e) {
    wrapper.classList.add("header__wrapper--active");
    document.body.style.overflowY = "hidden";
  });
// .header__burger-button--close
document
  .querySelector(".header__burger-button--close")
  .addEventListener("click", function (e) {
    wrapper.classList.remove("header__wrapper--active");
    document.body.style.overflowY = "auto";
  });
