
import 'styles/styles.scss';

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

