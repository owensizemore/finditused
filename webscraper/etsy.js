const puppeteer = require('puppeteer');



(async function main(sear){
    
    var items;
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    await page.goto(`https://etsy.com/search?q=${sear}`);

   
    await page.waitForSelector('div[class="jss342 jss343"]');
 
    items = await page.evaluate(() => {
        const title = document.querySelectorAll('img[class="wt-width-full wt-height-full wt-display-block wt-position-absolute  "]');
        const price = document.querySelectorAll('span[class="currency-value"]');
        const picture = document.querySelectorAll('img[class="idiwt2bm bixrwtb6 ni8dbmo4 stjgntxs k4urcfbm"]');
        const link = document.querySelectorAll('a[class="listing-link wt-display-inline-block                 641c92c7039889fb  logged"]');



        var info = {

            "firstItem": {
                "title": title[0].getAttribute('alt'),
                "price": "$" + price[0].innerHTML, 
                "picture": title[0].src,
                "link": link[0].href,
            },

            "secondItem": {
                "title": title[1].getAttribute('alt'),
                "price": "$" + price[1].innerHTML, 
                "picture": title[1].src,
                "link": link[1].href,
            },

            "thirdItem": {
                "title": title[2].getAttribute('alt'),
                "price": "$" + price[2].innerHTML, 
                "picture": title[2].src,
                "link": link[2].href,
            }

        }

        return info;
    });

    



    // let title = button.getProperty('title');


    console.log(items);
})('fifa 12');

// exports.searchUp = main;