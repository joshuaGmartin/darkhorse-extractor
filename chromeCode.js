// ========================================= extract book urls ========================================= //

const originalURLs = [];

document
  .querySelector(".page-container")
  .querySelectorAll("img")
  .forEach((img) => {
    originalURLs.push(img.getAttribute("data-src"));
  });

originalURLs;

// ========================================= extract google activity urls ========================================= //

const convertedURLs = [];

document
  .querySelector('[jsname="bN97Pc"]')
  .querySelectorAll("c-wiz")
  .forEach((cWiz) => {
    convertedURLs.push(cWiz.querySelector("a").href);
  });

convertedURLs;

// ========================================= extract chrome history ========================================= //
// old

const allHistItems = document
  .querySelector("body history-app")
  .shadowRoot.querySelector(
    "#main-container #content #tabs-container #tabsScrollContainer #tabs-content #history"
  )
  .shadowRoot.querySelector("iron-list.history-cards")
  .querySelectorAll("history-item");

const allURLs = [];

for (const link of allHistItems) {
  const tempURL = link.shadowRoot.querySelector(
    '#main-container div[role="row"]:not(.card-title) #item-container #item-info #title-and-domain #link'
  ).href;

  if (tempURL === "https://www.amazon.com/") break;

  allURLs.push(tempURL);
}

allURLs;
