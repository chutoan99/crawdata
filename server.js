const startBrowser = require("./browser");
const scrapeController = require("./ScapeController");

let browserInstance = startBrowser.startBrowser();
scrapeController(browserInstance);
