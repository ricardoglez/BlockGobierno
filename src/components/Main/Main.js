import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled, {keyframes} from 'styled-components';

import alerta from 'images/alert.png';

import { isExtension } from '../PorksUI/PorksUI';
import PorksUI from '../PorksUI';

let alertURL  = null; 

if( isExtension ){
  alertURL = chrome.extension.getURL("images/alert.png");
}

const AlertWrapper = styled(Col)`
  background:#EAEAEA;
  width:80%;
  padding:4px;
  border-radius:5px;
  drop-shadow: 0px 0px 0px 5px #fff ;
  margin:auto;
`;

const Alert = styled.h1`
  font-weight: 900;
  font-size:1em;
  text-align:center;
  color: rgba(162, 34, 68, 1);
  margin-bottom:0px;
`;

const Footer = styled.footer`

  display: flex ;
  margin-top:20px;
  justify-content:center;
  align-items: center;
`;

const Small = styled.small`
color:#ddd;
  font-size:35%;
  font-weight:100;
`;

const Message = styled.h4`
  font-size: 50% ;
  font-weight:500;
  text-align:center;
  color:#000;
  margin-bottom:25px;
`;

const Main = ( ) => {
  return (
    <div className='container' style={ {height: '100%' } }>
      <Row>
        <AlertWrapper>
          <Row>
            <Col justifyContent='center' alignItems='center'>
              <Alert>
              <img src={ isExtension ? alertURL : alerta } style={ { maxWidth:'50px ', marginRight: '3px'} }/> Alerta
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col sm={10} offset={1} alignItems='center' justifyContent='center'>
              <Message>
                Todas la maquinaria que conocemos dejará de funcionar en algún momento.
              </Message>
              <Message>
                La máquina de movimiento perpetuo no existe.
              </Message>
            </Col>
          </Row>
        </AlertWrapper>
      </Row>
      <PorksUI/>
      <Footer>
        <Small> El Manifiesto Post-futurista, Franco, Berardi, Febrero 2009  </Small>
      </Footer>
    </div>

  )
}

export { Main };