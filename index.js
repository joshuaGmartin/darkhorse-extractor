//declarations
import * as rawDataMod from "./rawDataMod.js";
import * as dataHandlerMod from "./dataHandlerMod.js";

const windowCloseDelay = 10000;
// const windowCloseDelay = 1000;
const windowOpenDelay = 100;

// ========================================= open windows with original URLs ========================================= //

// async function windowHandler(tempURL) {
//   let newWindow = window.open(tempURL);
//   await new Promise((resolve) => setTimeout(resolve, windowCloseDelay));
//   newWindow.close();
// }

// async function openAllWindows(URLsArr, i = 0) {
//   //base
//   if (i > URLsArr.length - 1) return;

//   await windowHandler(URLsArr[i]);
//   openAllWindows(URLsArr, i + 1);
// }

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

//=====================================================================================

//=====================================================================================

const formattedURLs = dataHandlerMod.getFinalURLs();

for (let i = formattedURLs.length - 1; i >= 0; i--) {
  const tempImg = document.createElement("img");
  tempImg.src = formattedURLs[i];

  document.body.appendChild(tempImg);
}

// function loadImgs(arr, i = arr.length - 1) {
//   if (i < 0) return;
//   const tempImg = document.createElement("img");
//   tempImg.src = formattedURLs[i];

//   console.log("#" + i);
//   console.log(tempImg.width);
//   console.log(tempImg.height);
//   document.body.appendChild(tempImg);

//   tempImg.onload = () => loadImgs(arr, i - 1);
// }

// loadImgs(formattedURLs);

//testing
// const testImg = document.createElement("img");
// testImg.src =
//   // "https://drhq3xefn6rcs.cloudfront.net/e07d1926dfe4475eadc7c44caa98c4c0/book/pages/c09b3ff3-4988-5c85-a517-68ca5f694bfd?Expires=1740723085&Signature=QgZoVC7ytjcSGGhmvNo3aLCddNThJ6mx6xzJ53frPpLJBRsxvbIBXxrUtssYQK4txk1JwxTM20zqmLee8m5ZHGUrBQbzsAJwieG4sZvAmjMouk3b4sJh40DbYACb5-GB-G1GXJXBaynp44fb9uvjlfLnbpjDY6dsEc99C3B8lSg_&Key-Pair-Id=APKAJJOJDZCU5NL3UDFQ";
//   "https://drhq3xefn6rcs.cloudfront.net/e07d1926dfe4475eadc7c44caa98c4c0/book/pages/c09b3ff3-4988-5c85-a517-68ca5f694bfd?Expires=1740715886&Signature=Am3mbj7W-JQx-PTm3HAtRtmqNeC-eOqb7vd0g5bQJ5vF2LUGVozSwcUZ~v1K9d-A3HD0IgXtdg~FrWJoHPN3q4nQiVSm98oNUSPR9ng2o3hTaMwWuXzSLZv~TJum9~ISSO-P1KFwEq67hPH5OkCgHAD7kTyAuF5kY22NxivpZ7Y_&Key-Pair-Id=APKAJJOJDZCU5NL3UDFQ";
// document.body.appendChild(testImg);

//notes
//the urls update eventually
