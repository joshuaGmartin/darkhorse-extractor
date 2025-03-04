// ========================================= print on comic reader page ========================================= //

const pageURLs = [];

document
  .querySelector(".page-container")
  .querySelectorAll("img")
  .forEach((img) => {
    pageURLs.push(img.getAttribute("data-src"));
  });

document.body.innerHTML = "";

pageURLs.forEach((url) => {
  const tempImg = document.createElement("img");
  tempImg.src = url;
  tempImg.style = "width: 100%";
  document.body.appendChild(tempImg);
  tempImg.onload = handleImgLoad;
});

let numLoadImgs = 0;

function handleImgLoad() {
  numLoadImgs++;
  console.log(`pages loaded: ${numLoadImgs}/${pageURLs.length}`);
  //print on all loaded
  if (numLoadImgs === pageURLs.length) window.print();
}
