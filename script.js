var flag = 0;
function showmenu() {
  if (window.matchMedia("(max-width: 1000px)").matches) {
    if (flag == 0) {
      document.getElementById("menu").style.display = "block";
      flag = 1;
    } else {
      document.getElementById("menu").style.display = "none";
      flag = 0;
    }
  } else {
    document.getElementById("menu").style.display = "none";
  }
}
var onresize = function (e) {
  document.getElementById("menu").style.display = "none";
};
window.addEventListener("resize", onresize);
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });

  carousel.insertAdjacentHTML(
    "beforeend",
    `
		<div class="carousel__nav">
			${buttonsHtml.join("")}
		</div>
	`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      // un-select all the items
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((button) =>
        button.classList.remove("carousel__button--selected")
      );

      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button--selected");
    });
  });

  // Select the first item on page load
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button--selected");
});
