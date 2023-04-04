const scrapers = require("./scrapper");
const fs = require("fs");

const scrapeController = async (browserInstance) => {
  const url = "https://phongtro123.com/";
  const indexs = [1, 2, 3, 4, 5];
  const data = [
    "./data/chothuephongtro.json",
    "./data/nhachothue.json",
    "./data/chothuecanho.json",
    "./data/chothuematbang.json",
    "./data/timnguoioghep.json",
  ];
  const msg = ["Ghi data vô file json thất bại: ", "Thêm data thanh công !."];
  try {
    let browser = await browserInstance;
    // gọi hàm cạo ở file s scrape
    const categories = await scrapers.scrapeCategory(browser, url);
    const selectedCategories = categories.filter((category, index) =>
      indexs.some((i) => i === index)
    );
    console.log(categories);
    let result1 = await scrapers.scraper(browser, selectedCategories[0].link);
    fs.writeFile(data[0], JSON.stringify(result1), (err) => {
      if (err) console.log(msg[0] + err);
      console.log(msg[1]);
    });
    let result2 = await scrapers.scraper(browser, selectedCategories[1].link);
    fs.writeFile(data[1], JSON.stringify(result2), (err) => {
      if (err) console.log(msg[0] + err);
      console.log(msg[1]);
    });
    let result3 = await scrapers.scraper(browser, selectedCategories[2].link);
    fs.writeFile(data[2], JSON.stringify(result3), (err) => {
      if (err) console.log(msg[0] + err);
      console.log(msg[1]);
    });
    let result4 = await scrapers.scraper(browser, selectedCategories[3].link);
    fs.writeFile(data[3], JSON.stringify(result4), (err) => {
      if (err) console.log(msg[0] + err);
      console.log(msg[1]);
    });
    let result5 = await scrapers.scraper(browser, selectedCategories[4].link);
    fs.writeFile(data[4], JSON.stringify(result5), (err) => {
      if (err) console.log(msg[0] + err);
      console.log(msg[1]);
    });
    await browser.close();
  } catch (e) {
    console.log("Lỗi ở scrape controller: " + e);
  }
};

module.exports = scrapeController;
