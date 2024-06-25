console.log("abc");
var headTag = document.getElementsByTagName('head')[0]
const linkforCSSfile = document.createElement("link");
linkforCSSfile.href = 'https://cdn.jsdelivr.net/gh/makeshopify/Js-Deploy/oc-signature/signature.css'
linkforCSSfile.type = 'text/css'
linkforCSSfile.rel = 'stylesheet'
headTag.appendChild(linkforCSSfile);
document.body.appendChild(headTag);