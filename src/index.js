//    console.log('SUP');
//    chrome.webNavigation.onCommitted.addListener(function(e) {
//   if (hasHostSuffix(e.url, 'google.com') ||
//       hasHostSuffix(e.url, 'google.com.au')) {
//    console.log('SUP');
//   }
// });


import { createBlockOverlay } from './js/inject';

createBlockOverlay()
.then( response => {
  if(response.success){
    console.log('Successfull');
  }
})
.catch(err => {
   console.error(err);
});

