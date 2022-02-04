const puppeteer = require('puppeteer');
const $ = require('cheerio');

// const url = 'https://www.amazon.com/FIFA-Soccer-12-Playstation-3/dp/B004Z4ZKL6'


async function configureBrowser(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    return page;
}

async function checkPrice(page) {
    await page.reload();
    let title = await page.evaluate(() => document.body.querySelector('#productTitle').innerText);
    try{
    var price = await page.evaluate(() => document.body.querySelector('#priceblock_ourprice').innerText);
    }
    catch(error){
        price = 'Price not available.';
    }
    let image = await page.evaluate(() => document.body.querySelector('#imgTagWrapperId').getElementsByTagName('img')[0].src);

    var product = {
        "title": title,
        "price": price,
        "image": image,
    };

    return product
}

async function monitor(dub){
    let page = await configureBrowser(dub);
    
    console.log(await checkPrice(page));
}


exports.monitor = monitor;

