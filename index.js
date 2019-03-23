   console.log('SUP');
   chrome.webNavigation.onCommitted.addListener(function(e) {
  if (hasHostSuffix(e.url, 'google.com') ||
      hasHostSuffix(e.url, 'google.com.au')) {
   console.log('SUP');
  }
});
