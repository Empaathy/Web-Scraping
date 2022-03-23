const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'mysql username',
    password: 'mysql password',
  });

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://www.bonhommedebois.com/nos-univers-de-jouets/naissance.html?mr_years=5454')
    const gifts = await page.evaluate(() => {
        let gifts = [];
        let elements = document.querySelectorAll('div.product-item-info');
        for (element of elements) {
            gifts.push({
                title: element.querySelector('div.product.details a').text.trim(),
                image: element.querySelector('img.product-image-photo').src,
                price: element.querySelector('span.price').innerText,
            })
        }
        return gifts;
    });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE IF NOT EXISTS clicktobuy", function (err, result) {
      if (err) throw err;
      console.log("Database created");

    con.query("USE clicktobuy", function (err, result) {
      if (err) throw err;
      console.log("Database selected");

    var table = "CREATE TABLE IF NOT EXISTS toys (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), image VARCHAR(255), price VARCHAR(10))";
      con.query(table, function (err, result) {
        if (err) throw err;
        console.log("Table created");

    var insert = "INSERT INTO toys SET ?";
    for (gift of gifts) {
      con.query(insert, gifts, function (err, result) {
        if (err) throw err;
    })};
    console.log("Insertion completed");
  });
});
});
});

await browser.close();
})();