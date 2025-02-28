//declarations
import * as dataHandlerMod from "./dataHandlerMod.js";

const windowCloseDelay = 10000;

// ========================================= open windows with original URLs ========================================= //

function windowHandler(tempURL) {
  let newWindow = window.open(tempURL);
  setTimeout(() => newWindow.close(), windowCloseDelay);
}

function openAllWindows(URLsArr, i = 0) {
  //base
  if (i > URLsArr.length - 1) return;

  windowHandler(URLsArr[i].urlData);

  //one after another
  // setTimeout(() => openAllWindows(URLsArr, i + 1), windowOpenDelay);

  //all at once
  openAllWindows(URLsArr, i + 1);
}

//add button function
const getURLsBtn = document.querySelector("#get-converted-urls-btn");
getURLsBtn.addEventListener("click", () => {
  openAllWindows(dataHandlerMod.getPreConvertedURLs());
});

// ========================================= load imgs ========================================= //

const finalUrlObjs = dataHandlerMod.getFinalURLs();
//check
console.log(finalUrlObjs);

finalUrlObjs.forEach((obj) => {
  const tempImg = document.createElement("img");
  tempImg.src = obj.url;

  document.body.appendChild(tempImg);
});
