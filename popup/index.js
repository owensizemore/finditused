function getUrl() {
    // get url and return 
}

function getProductInfo(url) {
    // if url does not belong to amazon, replace popup with error message

    // get product info and store in var product

    // update HTML page to include product info
    document.getElementById("productName").innerHTML = product.name;
    document.getElementById("productPrice").innerHTML = product.price;
    document.getElementById("productImage").src = product.image; 
}

function init(){
    document.getElementById('testid1').innerHTML = "hello world";
}