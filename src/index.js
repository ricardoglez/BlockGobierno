
import { BaseCSS } from 'styled-bootstrap-grid';
import React from 'react';
import { render }from 'react-dom';

import  { Main } from './components/Main';

import { createBlockOverlay } from './js/inject';

createBlockOverlay()
.then( response => {
  if(response.success){
    console.log('Render my react components...');
    render(
      <Main/>, document.getElementById('blockOverlay')
    );
  }
})
.catch(err => {
   console.error(err);
});

