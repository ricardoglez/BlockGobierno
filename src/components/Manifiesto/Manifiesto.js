import React from 'react';

import styled from 'styled-components';

const ManifiestoList = styled.ul`
  list-style:none;
  background:#EAEAEA;
  border-radius: 5px;
  padding:20px;
  margin:25px auto;
`;

const Indicator = styled.strong`
  color:#a22244;
  font-size:1em;
  margin: 0px 3px;
`;

const ListItem = styled.li`
  display: flex;
  align-items:start;
  font-size:.3em;
  color:#000;
  font-weight:500;
`;

const Manifiesto = ( { manifiesto } ) => {

  let listManifiesto = Object.keys( manifiesto ).map( mKey => {
    if( manifiesto[ mKey ].isActive ){ 
      console.log(manifiesto[mKey]);
      return (<ListItem key={mKey}> <Indicator>{mKey}.</Indicator>  { manifiesto[ mKey ].label } </ListItem>)
    } 
  } );

  if( listManifiesto.length < 1 ){
    return null
  }

  return (
    <ManifiestoList>
      { listManifiesto}
    </ManifiestoList>)
}

export default  Manifiesto;