import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled, {keyframes} from 'styled-components';

const puercoURL1 = chrome.extension.getURL("images/puercos/p1.png");
const puercoURL2 = chrome.extension.getURL("images/puercos/p2.png");
const puercoURL3 = chrome.extension.getURL("images/puercos/p3.png");
const puercoURL4 = chrome.extension.getURL("images/puercos/p4.png");
const puercoURL5 = chrome.extension.getURL("images/puercos/p5.png");
const puercoURL6 = chrome.extension.getURL("images/puercos/p6.png");
const puercoURL7 = chrome.extension.getURL("images/puercos/p7.png");

export const GlowFrames = keyframes`
  0%{
    filter: drop-shadow(0px 0px 50px rgba( 224, 67, 24 ,.5 ) );
  }
  15%{
    filter: drop-shadow(0px 0px 20px rgba( 66, 116, 196 ,.5 ) );
  }
  30%{
    filter: drop-shadow(0px 0px 50px rgba( 224, 67, 24 ,.5 ) );
  }
  45%{
    filter: drop-shadow(0px 0px 20px rgba( 66, 116, 196 ,.5 ) );
  }
  60%{
    filter: drop-shadow(0px 0px 50px rgba( 224, 67, 24 ,.5 ) ) ;
  }
  85%{
    filter: drop-shadow(0px 0px 20px rgba( 66, 116, 196 ,.5 ) );
  }
  100%{
    filter: drop-shadow(0px 0px 50px rgba( 224, 67, 24 ,.5 ) );
  }
`;

export const ImagePorks = ( { name, src, index} ) => {
  return  ( <ImageResponsive as='img' id={name} src={ src } /> )
}

const AlertWrapper = styled(Col)`
  background:#EAEAEA;
  width:80%;
  padding:4px;
  top:30px;
  border-radius:5px;
  drop-shadow: 0px 0px 0px 5px #fff ;
  margin:auto;
`;

const ImageResponsive = styled.img`
  width       : 90%;
  height      : auto;
  transform   : all;
  animation   : ${ GlowFrames } 1.5s ease-out infinite ;
`;

const Alert = styled.h1`
  font-weight: 900;
  text-align:center;
  color: rgba(162, 34, 68, 1);
  margin-bottom:0px;
`;

const Message = styled.h4`
  font-size: 50% ;
  font-weight:100;
  text-align:center;
  color:#B3B2B2;
  margin-bottom:25px;
`;

const Main = () =>{
  return (

    <div className='container' style={ {height: '100%' } }>
      <Row>
        <AlertWrapper>
          <Row>
            <Col justifyContent='center' alignItems='center'>
              <Alert>
              Alerta
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col justifyContent='center' alignItems='center'>
              <Message>
                Este servicio esta restringido.
              </Message>
            </Col>
          </Row>
        </AlertWrapper>
      </Row>
      <div style={ { 
        display:'flex',
        flex:'1',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
       } }>
        <Col sm={1} alignItems='center' justifyContent='center'>
          <ImagePorks name='puerco1' src={puercoURL4} />
        </Col>
        <Col sm={2} alignItems='center' justifyContent='center'>
          <ImagePorks name='puerco1' src={puercoURL7} />
        </Col>
        <Col sm={2} alignItems='center' justifyContent='center'>
          <ImagePorks name='puerco1' src={puercoURL1} />
        </Col>
        <Col sm={2} alignItems='center' justifyContent='center'>
          <ImagePorks name='puerco1' src={puercoURL3} />       
        </Col>
        <Col sm={2} alignItems='center' justifyContent='center'>
          <ImagePorks name='puerco1' src={puercoURL5} />
        </Col>
        <Col sm={2} alignItems='center' justifyContent='center'>
          <ImagePorks name='puerco1' src={puercoURL6} />
        </Col>
        <Col sm={1} alignItems='center' justifyContent='center'>
          <ImagePorks name='puerco1' src={puercoURL2} />
        </Col>
      </div>
    </div>

  )
}

export { Main };