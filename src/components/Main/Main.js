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

const Alert = styled.h3`
  font-weight: 900;
  font-size:.5em;
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

const Message = styled.h6`
  font-size: .3em ;
  font-weight:500;
  text-align:center;
  color:#000;
  margin-bottom:25px;
`;

const CloseButton = styled.button`
  position:absolute;
  right:2.5em;
  height:35px;
  font-size:12px;
  border: none;
  font-weight:700;
  border-radius:35%;
  background:transparent;
`;



class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = { 
      show: true,
    }

    this.handleShowPlugin = ()=>{
      console.log('Clicked Change ');
      this.setState({ show: !this.state.show });
    }
  }

  render (){
    if( !this.state.show ){
      return  null
    }
    return (
      <div className='container' style={ {height: '100%' } }>
        <Row>
          <CloseButton onClick={ this.handleShowPlugin }>Escape</CloseButton>
          <AlertWrapper>
            <Row>
              <Col justifyContent='center' alignItems='center'>
                <Alert>
                <img src={ isExtension ? alertURL : alerta } style={ { maxWidth:'30px ', marginRight: '3px'} }/> Alerta
                </Alert>
              </Col>
            </Row>
            <Row>
              <Col sm={10} offset={1} alignItems='center' justifyContent='center'>
                <Message>
                  Todas las maquinarias que conocemos dejarán de funcionar en algún momento.
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
          <Small> El Manifiesto Post-futurista, Franco Berardi, Febrero 2009  </Small>
        </Footer>
      </div>
  
    )
  }
}

export { Main };