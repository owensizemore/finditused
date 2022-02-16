const puppeteer = require('puppeteer');



async function main(sear){
    
    var items;
    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();
    await page.goto(`https://www.facebook.com/marketplace/la/search/?query=${sear}`);

    try{
    await page.waitForSelector('div[class="fome6x0j tkqzz1yd aodizinl fjf4s8hc f7vcsfb0"]');
 
    items = await page.evaluate(() => {
        const title = document.querySelectorAll('span[class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7"]');
        const price = document.querySelectorAll('span[class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d3f4x2em mdeji52x a5q79mjw g1cxx5fr lrazzd5p oo9gr5id"]');
        const picture = document.querySelectorAll('img[class="idiwt2bm bixrwtb6 ni8dbmo4 stjgntxs k4urcfbm"]');
        const link = document.querySelectorAll('a[class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 p8dawk7l"]');



        var info = {

            "firstItem": {
                "title": title[0].innerText,
                "price": price[0].innerHTML, 
                "picture": picture[0].src,
                "link": link[0].href,
            },

            "secondItem": {
                "title": title[1].innerHTML,
                "price": price[1].innerHTML, 
                "picture": picture[1].src,
                "link": link[1].href,
            },

            "thirdItem": {
                "title": title[2].innerHTML,
                "price": price[2].innerHTML, 
                "picture": picture[2].src,
                "link": link[2].href,
            }

        }

        return info;
    });

    
}
catch(error){
    console.log('something went wrong');
}


    // let title = button.getProperty('title');

    return items;

}

exports.searchFacebook = main;