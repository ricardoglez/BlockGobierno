chrome.runtime.onConnect.addListener(function(port){
  port.postMessage({greeting:"hello"});
});