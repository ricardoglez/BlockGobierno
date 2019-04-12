'use strict';
// import icon16 from 'icons/icon-16.png';
// import icon24 from 'icons/icon-24.png';
// import icon32 from 'icons/icon-24.png';

import { blockOverlay } from 'templates/blockOverlay.js';


const createBlockOverlay = ( ) => {
  console.log('injecting...');

  return new Promise( (resolve, reject) => {

    console.log( blockOverlay );
   
    var overlay = document.createElement("DIV");
    overlay.appendChild(document.createTextNode(''));
    overlay.setAttribute('id', 'blockOverlay')
    overlay.style.display = 'block';
    overlay.style.position = 'absolute';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.color = '#fff';
    overlay.style.fontSize = '3em';
    overlay.style.top = '35px';
    overlay.style.paddingTop = '30px';
    overlay.style.zIndex = '60';
    overlay.style.background = 'rgba(0,0,0,.8)';


    document.body.style.width = '100%';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    document.body.appendChild( overlay );


    document.body.appendChild.innerHTML =  blockOverlay ;


    resolve( { success: true } )

  })
};


export { createBlockOverlay  };