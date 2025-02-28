import mergeSort from "./mergSort.js";
import * as rawDataMod from "./rawDataMod.js";

//for windowHandler
export function getPreConvertedURLs() {
  //init list with starting point
  const preConvertedURLs = [{ urlData: "https://www.amazon.com", page: 0 }];

  let page = 1;

  rawDataMod.originalURLs.forEach((url) => {
    preConvertedURLs.push({
      urlData: "https://digital.darkhorse.com" + url,
      page,
    });
    page++;
  });

  return preConvertedURLs;
}

export function getFinalURLs() {
  const bookURLs = [];

  for (const url of rawDataMod.convertedURLs) {
    let trimURL = url;

    if (url.includes("https://www.google.com/url?q=")) {
      trimURL = url.split("https://www.google.com/url?q=")[1];
    }

    if (trimURL.includes("https://www.amazon.com/")) break;

    if (trimURL.includes("https://drhq3xefn6rcs.cloudfront.net")) {
      bookURLs.push(trimURL);
    }
  }

  const formattedURLs = formatURLsFinal(bookURLs);

  return mergeSort(formattedURLs);
}

function formatURLsFinal(urls) {
  const finalURLs = [];

  urls.forEach((url) => {
    let finalURL = url;

    if (finalURL.includes("%")) {
      finalURL = url.split("%");

      finalURL =
        finalURL[0] +
        "?" +
        finalURL[1].slice(2) +
        "=" +
        finalURL[2].slice(2) +
        "&" +
        finalURL[3].slice(2) +
        "=" +
        finalURL[4].slice(2) +
        "&" +
        finalURL[5].slice(2) +
        "=" +
        finalURL[6].slice(2).split("&")[0];
    }

    finalURLs.push(finalURL);
  });

  return finalURLs;
}

//testing
