const puppeteer = require('puppeteer');
const $ = require('cheerio');


async function checkPrice(url) {

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);


    await page.waitForSelector('#productTitle');

    let product = await page.evaluate(() => {

        var title = document.body.querySelector('#productTitle').innerText;
        var wholey = document.body.querySelectorAll('span[class="a-offscreen"]');
        var price = wholey[0].innerText.replace('\n.', '');
        
        try{
            var image = document.body.querySelector('#imgTagWrapperId').getElementsByTagName('img')[0].src;
        }
        catch(other){
            image = 'not available';
        }

        var info = {
            "title": title,
            "price": price,
            "picture": image
        }

        
        return info;
        
    });

    
    return product;
}



exports.checkPrice = checkPrice;

