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
  const allBookURLs = [];

  for (const url of rawDataMod.convertedURLs) {
    //if pull from chrome histoty
    let trimURL = url;

    //if pull from chrome activity
    if (url.includes("https://www.google.com/url?q=")) {
      trimURL = url.split("https://www.google.com/url?q=")[1]; //split off prepend and grab the second half
    }

    if (trimURL.includes("https://www.amazon.com/")) break;

    allBookURLs.push(trimURL);
  }

  const formattedURLs = formatURLsFinal(allBookURLs);
  const finalURLsAndPage = addPageNum(formattedURLs);

  return mergeSort(finalURLsAndPage);
}

function addPageNum(urls) {
  const urlsAndPages = [];
  const preConvertedURLs = getPreConvertedURLs();

  urls.forEach((url) => {
    let pageNum;

    for (const obj of preConvertedURLs) {
      const urlID = obj.urlData.slice(-36);

      if (url.includes(urlID)) {
        pageNum = obj.page;
        break;
      }
    }

    urlsAndPages.push({ url, page: pageNum });
  });

  return urlsAndPages;
}

function formatURLsFinal(urls) {
  const finalURLs = [];

  urls.forEach((url) => {
    //if pull from chrome histoty
    let finalURL = url;

    //if pull from chrome activity
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
