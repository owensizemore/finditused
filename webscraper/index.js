

const puppeteer = require('puppeteer');

async function ebayy(input) {

    const USER = input;
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.ebay.com/');
    
    await page.waitForSelector('#gh-f');

    await page.$eval('input[name=_nkw]', (el, user) => el.value = user, USER);
    // await page.type('input#gh-ac', `fifa 12`)


    await page.click('input[type="submit"]');

    await page.waitForSelector('#srp-river-main');
    let features = await page.evaluate(() => {
        let title = document.body.querySelectorAll('.s-item__title');
        let picture = document.body.querySelectorAll('.s-item__image-img');
        let price = document.body.querySelectorAll('.s-item__price');
        let link = document.body.querySelectorAll('.s-item__link');


        var info = {

            "firstItem": {
                "title": title[1].innerText,
                "price": price[1].innerHTML, 
                "picture": picture[1].src,
                "link": link[1].href,
            },

            "secondItem": {
                "title": title[2].innerText,
                "price": price[2].innerHTML, 
                "picture": picture[2].src,
                "link": link[2].href,
            },

            "thirdItem": {
                "title": title[3].innerText,
                "price": price[3].innerHTML, 
                "picture": picture[3].src,
                "link": link[3].href,
            }

        }

        return info;
        
    });

    return features;
    
}

// exports.searchEbay = main;



//____________________________________________________________
// const amaz = require('./amazon');
// const face = require('./facebook');
// const upp = require('./etsy')


// face.searchFacebook('water bottle').then(x =>{
//     console.log(x);
// })




function getEbayProd(query){
    // const eba = require('./ebay.js');
    return ebayy(query);
}

function search() {
    let searchQuery = document.getElementById("search").innerText;
    let results = getEbayProd(searchQuery);
    document.getElementById("results").innerText = results;
}

//ok get the current url
//feed the url into the amazon method
//show the amazon details onto frontend
//load the name into facebook/ebay methods
//show first three product details onto the front end