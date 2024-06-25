console.log("abcasdsssa");
   var scriptUrl = document.currentScript.src;

    // Create a URL object to easily extract query parameters
    var urlParams = new URL(scriptUrl).searchParams;

    // Extract the 'shop' parameter from the URL
    var shopUrl = urlParams.get('shop');
  console.log('shopify: ', shopUrl);

var linka = document.createElement('link');

// set properties of link tag
linka.href = 'https://plugin999.com/demo/sendmailcorephp/js/oc-signature/signature.css';
linka.rel = 'stylesheet';
linka.type = 'text/css';

// Loaded successfully
linka.onload = function() {
	console.log('success');
};

// Loading failed
linka.onerror = function() {
	console.log('error');
};

// append link element to html
document.body.appendChild(linka);