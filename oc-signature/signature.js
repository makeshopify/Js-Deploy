console.log("abcasdsa");

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