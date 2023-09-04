import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onClickShow);
function onClickShow(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  const { target } = event;
  event.preventDefault();

  const instance = basicLightbox.create(`
      <img class="gallery__image" src="${target.dataset.source}" alt="${target.alt}" width="800" height="600">
  `);
  instance.show();
}
