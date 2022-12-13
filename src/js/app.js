import { createElement } from "./modules/create_tag.js";

const postsGrid = document.querySelector(".posts-grid");

for (let i = 1; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 99);
  const gridItem = createElement("div", "grid-item");
  const imageWrapper = createElement("div", "image-wrapper");
  const image = createElement("img", "image");
  const gridItemInfo = createElement("div", "grid-item-info");
  const gridItemTitle = createElement("p", "grid-item__title");
  const gridItemText = createElement("p", "grid-item__text");
  const gridItemComments = createElement("span", "grid-item__info");
  const comment = createElement("span", "grid-item__comment");
  image.src = `@img/post_image/post-image${i}.jpg`;
  gridItemTitle.innerText = "Aenean Adipiscing Etiam Vestibulum";
  gridItemComments.innerText = `Photography, Journal   /   ${randomNumber} Comments`;
  gridItemText.innerText =
    "Etiam porta sem malesuada euismod. Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.";

  imageWrapper.append(image);
  gridItem.append(imageWrapper);
  gridItem.append(gridItemInfo);
  gridItemInfo.append(gridItemTitle, gridItemComments, gridItemText);

  postsGrid.append(gridItem);
}

const navList = document.querySelector(".list");
const navButton = document.querySelector(".dropdown-menu");
const navButtonLines = document.querySelectorAll(".dropdown-menu-item");
const navButtonLinesArray = [...navButtonLines];

navButton.addEventListener("click", () => {
  navButtonLinesArray.forEach((element) => {
    element.classList.toggle("prepare-rotate");
  });
  navList.classList.toggle("open");
  navButtonLinesArray[0].classList.toggle("remove");
  navButtonLinesArray[1].classList.toggle("rotate-left");
  navButtonLinesArray[2].classList.toggle("rotate-right");
});
