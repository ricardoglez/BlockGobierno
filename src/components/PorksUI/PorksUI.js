import React from 'react';

import { Container, Row, Col } from 'styled-bootstrap-grid';
import styled, {keyframes, css} from 'styled-components';

import puerco1 from "images/puercos/p1.png";
import puerco2 from "images/puercos/p2.png";
import puerco3 from "images/puercos/p3.png";
import puerco4 from "images/puercos/p4.png";
import puerco5 from "images/puercos/p5.png";
import puerco6 from "images/puercos/p6.png";
import puerco7 from "images/puercos/p7.png";


let puercoURL1 , puercoURL2, puercoURL3, puercoURL4, puercoURL5, puercoURL6, puercoURL7 = null; 


const isExtension = chrome && chrome.hasOwnProperty( 'extension' ); 

if( isExtension ){
  puercoURL1 = chrome.extension.getURL("images/puercos/p1.png");
  puercoURL2 = chrome.extension.getURL("images/puercos/p2.png");
  puercoURL3 = chrome.extension.getURL("images/puercos/p3.png");
  puercoURL4 = chrome.extension.getURL("images/puercos/p4.png");
  puercoURL5 = chrome.extension.getURL("images/puercos/p5.png");
  puercoURL6 = chrome.extension.getURL("images/puercos/p6.png");
  puercoURL7 = chrome.extension.getURL("images/puercos/p7.png");
}


const PorksWrapper = styled.div`
  display: flex ;
  flex: 1 ;
  height:100%;
  justify-content:center;
  align-items:center;
`;

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

const animation = props =>
  css`
    ${GlowFrames} ;
  `

const Image = ( { className, src } ) => {
  return <img className={className} src={ src } ></img>
}

const ImageResponsive = styled(Image)`
  width       : 90%;
  max-width   : 200px;
  min-width   : 100px;
  height      : auto;
  transform   : all;
  
  filter      : drop-shadow( 0 0 20px rgba( 160, 160, 160,.6) )
 
`;


export const ImagePorks = ( { name, src  } )  => {
  return  ( <ImageResponsive as='img' id={name} src={ src } /> )
}


const  PorkItem = ({ pork, src }) => {
  return <ImageResponsive className={ pork.isGlowing ? 'glow' : '' } src={ src } isGlowing={ pork.isGlowing }/>
} ;

class PorksUI extends React.Component{
  constructor(props){
    super( );
  
    this.state = { 
      porks: {
        1:{
          position: null,
          imgUrl: 'images/puercos/p1.png',
          isGlowing: false,
          isOpen: false,
          id: 1
        },
        2:{
          position: null,
          isGlowing: false,
          isOpen: false,
          imgUrl: 'images/puercos/p2.png',
          id: 2
        },
        3:{
          position: null,
          isGlowing: false,
          isOpen: false,
          imgUrl: 'images/puercos/p3.png',
          id: 3
        },
        4:{
          position: null,
          isGlowing: false,
          isOpen: false,
          imgUrl: 'images/puercos/p4.png',          
          id: 4
        },
        5:{
          position: null,
          isGlowing: false,
          isOpen: false,
          id: 5,
          imgUrl: 'images/puercos/p5.png',
        },
        6:{
          position: null,
          imgUrl: 'images/puercos/p6.png',        
          isGlowing: false,
          isOpen: false,
          id: 6
        },
        7:{
          position: null,
          imgUrl: 'images/puercos/p7.png',
          isGlowing: false,
          isOpen: false,
          id:7
        },
      },
    };

    this.initializePorks = () => {
      console.log('Initial porks');
      let defaultPorks = this.state.porks;
      const getRandomArbitrary = (min, max) => {
        return parseInt(Math.random() * (max - min) + min);
      }
      let rN = getRandomArbitrary( 1, 7 );

      Object.keys( defaultPorks ).forEach( pK => {
        if( pK == rN){
          defaultPorks[ pK ].isGlowing = true; 
        }

      } )
      console.log( defaultPorks, rN);

      this.setState( { porks: defaultPorks } );

    }
  }

  componentDidMount(){
    this.initializePorks();
  }
  
  
  render(){
    return (
    <PorksWrapper >
      <Col sm={1} alignItems='center' justifyContent='center'>
        <PorkItem pork={ this.state.porks[4] } name='puerco4' src={isExtension ? puercoURL4 : puerco4 } />        
      </Col>
      <Col sm={2} alignItems='center' justifyContent='center'>
        <PorkItem pork={ this.state.porks[7] } name='puerco7' src={ isExtension ? puercoURL7 : puerco7 } />
      </Col>
      <Col sm={2} alignItems='center' justifyContent='center'>
        <PorkItem pork={ this.state.porks[1] } name='puerco1' src={ isExtension ? puercoURL1 : puerco1 } />
      </Col>
      <Col sm={2} alignItems='center' justifyContent='center'>
        <PorkItem pork={ this.state.porks[3] } name='puerco3' src={ isExtension ? puercoURL3 : puerco3 } />       
      </Col>
      <Col sm={2} alignItems='center' justifyContent='center'>
        <PorkItem pork={ this.state.porks[5] } name='puerco5' src={ isExtension ? puercoURL5 : puerco5 } />
      </Col>
      <Col sm={2} alignItems='center' justifyContent='center'>
        <PorkItem pork={ this.state.porks[6] } name='puerco6' src={ isExtension ? puercoURL6 : puerco6 } />
      </Col>
      <Col sm={1} alignItems='center' justifyContent='center'>
        <PorkItem pork={ this.state.porks[2] } name='puerco2' src={ isExtension ? puercoURL2 : puerco2 } />
      </Col>
    </PorksWrapper>
    )
  }

}

export  default PorksUI;