'use strict';

import { blockOverlay } from './templates/blockOverlay.js';
overlay
console.log('injecting...');

const createBlockOverlay = () => {

  return new Promise( (resolve, reject) => {

    var importTag = document.createElement('link');

   
    // var overlay = document.createElement("DIV");
    // overlay.appendChild(document.createTextNode(''));
    // overlay.setAttribute('id', 'blockOverlay')
    // overlay.style.display = 'block';
    // overlay.style.position = 'absolute';
    // overlay.style.width = '100%';
    // overlay.style.height = '100%';
    // overlay.style.color = '#fff';
    // overlay.style.fontSize = '3em';
    // overlay.style.top = '35px';
    // overlay.style.zIndex = '60';
    // overlay.style.background = 'rgba(0,0,0,.8)';


    // document.body.style.width = '100%';
    // document.body.style.height = '100%';
    // document.body.style.overflow = 'hidden';
    document.body.appendChild.innerHTML =  blockOverlay ;


    resolve( { success: true } )

  })
};


const setLayout = () => {

};


createBlockOverlay()
.then( response => {
  if(response.success){
    console.log('Successfull');
  }
});