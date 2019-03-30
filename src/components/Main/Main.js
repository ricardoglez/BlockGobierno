import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled, {keyframes} from 'styled-components';

import PorksUI from '../PorksUI';

const AlertWrapper = styled(Col)`
  background:#EAEAEA;
  width:80%;
  padding:4px;
  top:30px;
  border-radius:5px;
  drop-shadow: 0px 0px 0px 5px #fff ;
  margin:auto;
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

const Main = ( ) => {
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
      <PorksUI/>
    </div>

  )
}

export { Main };