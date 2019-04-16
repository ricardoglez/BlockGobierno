import React from 'react';

import styled, { keyframes } from 'styled-components';


const appear = keyframes`
0% {
 opacity:0;
}
50% {
 opacity: .7;
}
100%{
  opacity: 1;
}
`;

const ManifiestoList = styled.ul`
  list-style:none;
  width:80%;
  padding:24px;
  margin:25px auto;
  height: 150px;
  overflow: auto;
  oveflow-y: auto;
`;

const Indicator = styled.strong`
  color:#a22244;
  font-size:1em;
  margin: 0px 3px;
`;

const ListItem = styled.li`
  background:#EAEAEA;
  display: flex;
  border-radius:5px;
  drop-shadow: 0px 0px 0px 5px #fff ;
  align-items:start;
  font-size:.3em;
  color:#000;
  font-weight:500;
  margin: 8px;
  padding:4px;
  animation: ${ appear } .25s ease-in;
`;

const Manifiesto = ( { manifiesto } ) => {

  let listManifiesto = Object.keys( manifiesto ).map( mKey => {
    if( manifiesto[ mKey ].isActive ){ 
      // console.log(manifiesto[mKey]);
      return (
      <ListItem className={'item-'+mKey} key={mKey}> 
        <Indicator>{mKey}.</Indicator>  
        { manifiesto[ mKey ].label } 
      </ListItem>)
    } 
  } );

  if( listManifiesto.length < 1 ){
    return null
  }

  return (
    <ManifiestoList id='manifiesto'>
      { listManifiesto}
    </ManifiestoList>)
}

export default  Manifiesto;