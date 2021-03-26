window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("init");
  const burger = document.querySelector(".burger");
  const dropdown = document.querySelector(".dropdown");
  burger.addEventListener("click", function () {
    if (dropdown.classList.contains("hide")) {
      dropdown.classList.remove("hide");
      setTimeout(() => {
        dropdown.classList = "dropdown remove_opacity";
      }, 100);
    } else {
      dropdown.classList = "dropdown add_opacity";
      setTimeout(() => {
        dropdown.classList.add("hide");
      }, 500);
    }
  });
}
