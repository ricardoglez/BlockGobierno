console.log('Working....');
var jquery = require('jquery' );

chrome.webNavigation.onCompleted.addListener(function(e){
  
}, {url: [{urlSuffix: 'gob.mx'},
{hostSuffix: 'gob.mx'}]});