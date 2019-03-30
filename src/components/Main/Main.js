import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

var imgURL = chrome.extension.getURL("images/puercos/p1.png");

const Main = () =>{
  return (
      <div style={ { 
        display:'flex',
        flex:'1',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
       } }>
        <Col sm={1} alignItems='center' justifyContent='center'>
          <img src={imgURL} />
        </Col>
        <Col sm={2} alignItems='center' justifyContent='center'>2</Col>
        <Col sm={2} alignItems='center' justifyContent='center'>3</Col>
        <Col sm={2} alignItems='center' justifyContent='center'>4</Col>
        <Col sm={2} alignItems='center' justifyContent='center'>5</Col>
        <Col sm={2} alignItems='center' justifyContent='center'>6</Col>
        <Col sm={1} alignItems='center' justifyContent='center'>7</Col>
      </div>
  )
}

export { Main };