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

const navButton = document.querySelector(".dropdown-menu");
const navList = document.querySelector(".list");

navButton.addEventListener("click", () => {
  if (getComputedStyle(navList).opacity === "0") {
    navList.style.opacity = 1;
    navButton.classList.add("open");
  } else if (getComputedStyle(navList).opacity === "1") {
    navList.style.opacity = 0;
    navButton.classList.remove("open");
  }
});

const lines = document.querySelectorAll(".dropdown-menu-item");
const linesArray = [...lines];
