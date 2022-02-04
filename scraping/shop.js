const puppeteer = require('puppeteer');
const amaz = require('./amazon');

(async function main() {
    try{
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.ebay.com/');
    await page.waitForSelector('#gh-f');

    await page.$eval('input[name=_nkw]', el => el.value = 'Fifa 12');

    await page.click('input[type="submit"]');
    await page.waitForSelector('#srp-river-main');
    let features = document.body.querySelectorAll('.s-item s-item__pl-on-bottom');
    let products = [];

    for(let i = 0; i < 3; i++){
    
        

    
    products.push(features[i].getElementsByClassName('s-item__title').innerText);
    
    
    }

    console.log(products);

    

    

    
    




    }



    catch(e){
        console.log('we got an error', e);
    }
})();

