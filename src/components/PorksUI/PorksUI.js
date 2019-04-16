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

import Manifiesto from '../Manifiesto';
import AnimatedPork from '../AnimatedPork';

let puercoURL1 , puercoURL2, puercoURL3, puercoURL4, puercoURL5, puercoURL6, puercoURL7 = null; 


export const isExtension = chrome && chrome.hasOwnProperty( 'extension' ); 

if( isExtension ){
  puercoURL1 = chrome.extension.getURL("images/puercos/p1.png");
  puercoURL2 = chrome.extension.getURL("images/puercos/p2.png");
  puercoURL3 = chrome.extension.getURL("images/puercos/p3.png");
  puercoURL4 = chrome.extension.getURL("images/puercos/p4.png");
  puercoURL5 = chrome.extension.getURL("images/puercos/p5.png");
  puercoURL6 = chrome.extension.getURL("images/puercos/p6.png");
  puercoURL7 = chrome.extension.getURL("images/puercos/p7.png");
}

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

const Footer = styled.footer`

  display: flex ;
  margin:auto;
  width:80%;
  margin-top:20px;
  justify-content:center;
  align-items: center;
  animation: ${appear} .25s ease-in;
`;

const Small = styled.small`
color:#ddd;
  font-size:35%;
  font-weight:100;
`;


const PorksWrapper = styled.div`
  position:absolute;
  bottom:8%;
  display: flex ;
  flex: 1 ;
  height:100%;
  justify-content:center;
  align-items:center;
`;

const PorkWrap = styled.div`
  display: flex ;
  fle-wrap:initial;
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

const Image = ( { className, src ,onClick, pork} ) => {
  return (
  <img 
  className={className} 
  src={ src } 
  onClick={ () =>  { onClick( pork.id ); }}></img>
  )
}

const ImageResponsive = styled(Image)`
  width       : 90%;
  max-width   : 200px;
  min-width   : 100px;
  height      : auto;
  transform   : all;
  opacity     : .5;
  cursor      :pointer;
  filter      : drop-shadow( 0 0 60px rgba( 160, 160, 160,.6) )
 
`;

let port = null;

const  PorkItem = ({ pork, src, onClick }) => {
  return (
    <ImageResponsive 
      className={ pork.isSelected ? 'glow' : '' }  
      src={ src } 
      isSelected={ pork.isSelected } 
      pork={ pork }
      onClick={ onClick }
    />
  )
} ;

class PorksUI extends React.Component{
  constructor(props){
    super( );
  
    this.state = {
      manifestIsViewed: false, 
      porks: {
        1:{
          position: null,
          imgUrl: 'images/puercos/p1.png',
          isSelected: false,
          isOpen: false,
          id: 1
        },
        2:{
          position: null,
          isSelected: false,
          isOpen: false,
          imgUrl: 'images/puercos/p2.png',
          id: 2
        },
        3:{
          position: null,
          isSelected: false,
          isOpen: false,
          imgUrl: 'images/puercos/p3.png',
          id: 3
        },
        4:{
          position: null,
          isSelected: false,
          isOpen: false,
          imgUrl: 'images/puercos/p4.png',          
          id: 4
        },
        5:{
          position: null,
          isSelected: false,
          isOpen: false,
          id: 5,
          imgUrl: 'images/puercos/p5.png',
        },
        6:{
          position: null,
          imgUrl: 'images/puercos/p6.png',        
          isSelected: false,
          isOpen: false,
          id: 6
        },
        7:{
          position: null,
          imgUrl: 'images/puercos/p7.png',
          isSelected: false,
          isOpen: false,
          id:7
        },
      },
      manifiesto:{
        1: {
          id:1,
          isActive: false,
          isViewed: false,
          label: 'Queremos cantar sobre el peligro del amor, sobre la creación diaria de una energía dulce que nunca se dispersa.',
        },
        2: {
          id:2,
          isActive:false,
          isViewed: false,
          label: 'Los elementos esenciales de nuestra poesía serán la ironía, la ternura y la rebelión.',
        },
        3: {
          id:3,
          isActive: false,
          isViewed: false,
          label : 'La ideología y la publicidad han exaltado la movilización permanente de las energías productivas y nerviosas de la humanidad hacia el lucro y la guerra. Queremos exaltar la ternura, el sueño y el éxtasis, la frugalidad de las necesidades y el placer de los sentidos.'
        },
        4: {
          id:4,
          isActive: false,
          isViewed: false,
          label : 'Declaramos que el esplendor del mundo se ha enriquecido con una nueva belleza: la belleza de la autonomía. Cada uno a su propio ritmo; nadie debe ser obligado a marchar a un ritmo uniforme. Los coches han perdido su encanto de rareza, sobre todo porque ya no pueden realizar la tarea para la que fueron concebidos: la velocidad se ha ralentizado. Los coches son inmóviles como estúpidas tortugas adormecidas en el tráfico de la ciudad. Sólo lentitud es rápido.'
        },
        5: {
          id:5,
          isActive: false,
          isViewed: false,
          label : 'Queremos cantar de los hombres y las mujeres que se acarician mutuamente para conocerse unos a otros y mejorar al mundo.'
        },
        6: {
          id:6,
          isActive: false,
          isViewed: false,
          label : 'El poeta debe gastarse a sí mismo con la calidez y la prodigalidad para aumentar el poder de la inteligencia colectiva y reducir el tiempo de trabajo asalariado.'
        },
        7: {
          id:7,
          isActive: false,
          isViewed: false,
          label : 'Ya no hay belleza más que en la autonomía. Ninguna obra que no logra expresar la inteligencia de lo posible puede ser una obra maestra. La poesía debe ser un puente tendido sobre el abismo de la nada para permitir el intercambio entre imaginaciones distintas y liberar singularidades.'
        },
        8: {
          id:8,
          isActive: false,
          isViewed: false,
          label : 'Estamos en el extremo promontorio de los siglos… Debemos mirar atrás para recordar el abismo de la violencia y el horror que la agresividad militar y la ignorancia nacionalista son capaces de evocar en cualquier momento en el tiempo. Hemos vivido en la época de la religión estancada por mucho tiempo. Omnipresente y la velocidad eterna están tras nosotros, en el Internet; así que podemos olvidar sus rimas sincopadas y encontrar nuestro singular ritmo.'
        },
        9: {
          id:9,
          isActive: false,
          isViewed: false,
          label : 'Queremos ridiculizar a los idiotas que difunden el discurso de la guerra: los fanáticos de la competencia, los fanáticos de los dioses barbudos que incitan masacres, los fanáticos aterrorizados por la feminidad floreciente en todos nosotros.'
        },
        10: {
          id:10,
          isActive: false,
          isViewed: false,
          label : ' Exigimos que el arte se convierta en una fuerza que cambie la vida. Buscamos abolir la división entre la poesía y la comunicación masiva, para reclamar el poder de los medios a los mercaderes y devolverlo a los poetas y los sabios.'
        },
        11: {
          id:11,
          isActive: false,
          isViewed: false,
          label : 'Cantaremos sobre las grandes multitudes que finalmente pueden liberarse de la esclavitud del trabajo asalariado y que con solidaridad se rebelan contra la explotación. Vamos a cantar sobre la red infinita del conocimiento y de la invención, la tecnología inmaterial que nos libera del sufrimiento físico. Cantaremos del cognitariado rebelde que está en contacto con su propio cuerpo. Vamos a cantar a la infinitud del presente y abandonar la ilusión de un futuro.'
        },
      }
    };

    this.selectPork = ( porkId ) => {
      console.log( 'selected porkId', porkId);
      let temporalPorks = this.state.porks;
      let temporalManifiesto = this.state.manifiesto;
      let RNumber = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
      let isManifestViewed = false;
      console.log( 'Initial Random Number: ', RNumber)
      console.log('current Manifiesto  ' , temporalManifiesto[ RNumber ]);

      Object.keys( temporalPorks ).forEach( pKey => {
        // temporalManifiesto[ pKey ].isActive = false;
        temporalPorks[ pKey ].isOpen = false;
        temporalPorks[ pKey ].isSelected = false;
      })

        while( temporalManifiesto[ RNumber ].isViewed && !this.state.manifestIsViewed){
          RNumber = Math.floor(Math.random() * ( 11 - 1 + 1 ))+1;
          console.log( 'reacalculate Random Number:',RNumber);
        }

      temporalManifiesto[ RNumber ].isActive = true;  
      temporalManifiesto[ RNumber ].isViewed = true;  

      temporalPorks[ porkId ].isOpen = true;
      temporalPorks[ porkId ].isSelected = true;

       isManifestViewed = Object.keys(temporalManifiesto)
       .filter( mKey => !temporalManifiesto[ mKey ].isViewed ); 
    


      this.setState( { 
        porks: temporalPorks, 
        manifestIsViewed: isManifestViewed.length < 1 
      } ,() => {
        if( isExtension ){
          this.state.port.postMessage( { message: "hello"} );
        }
        let searchThisItem = `.item-${RNumber}`;
        console.log(searchThisItem);

        let myScrollManifest = document.getElementById('manifiesto');
        let scrollToItem = myScrollManifest.querySelector(searchThisItem);
        console.log( scrollToItem, myScrollManifest ,RNumber);

        myScrollManifest.scrollTo( 0, scrollToItem.offsetTop-myScrollManifest.offsetTop-40);

      });

    }

    this.initializePorks = () => {
      console.log('Initial porks');
      let defaultPorks = this.state.porks;
      let defaultManifiesto = this.state.manifiesto;
      const getRandomArbitrary = (min, max) => {
        return parseInt(Math.random() * (max - min) + min);
      }
      let rN = getRandomArbitrary( 1, 7 );

      Object.keys( defaultPorks ).forEach( pK => {
        if( pK == rN){
          defaultPorks[ pK ].isSelected = true; 
          defaultManifiesto[ pK ].isActive = true;
          defaultManifiesto[ pK ].isViewed = true;
        } 
      } )
      console.log( defaultPorks, rN);

      this.setState( { porks: defaultPorks } );

    }
  }

  componentDidMount(){
    this.initializePorks();
  if( isExtension ){

    port = chrome.runtime.connect({name: 'someMessage'} );
    console.log(port);
    port.onMessage.addListener(function(message,sender){
      console.log(message, sender);
     if(message.greeting === "hello"){
       alert(message.greeting);
     }
   });
   this.setState( {port: port });
  }
  }
  
  
  render(){
    return (
    <React.Fragment>
      <Row>
      <Manifiesto manifiesto={ this.state.manifiesto}/>
      { this.state.manifestIsViewed 
        ?
        <Footer>
          <Small> El Manifiesto Post-futurista, Franco Berardi, Febrero 2009  </Small>
        </Footer>
        :
        null
      }
      </Row>
      <PorkWrap>
        <AnimatedPork manifestIsViewed={this.state.manifestIsViewed}  porkId={3} porks={ this.state.porks } selectPork={this.selectPork}/>
        <AnimatedPork manifestIsViewed={this.state.manifestIsViewed}  porkId={4} porks={ this.state.porks } selectPork={this.selectPork}/>
        <AnimatedPork manifestIsViewed={this.state.manifestIsViewed}  porkId={1} porks={ this.state.porks } selectPork={this.selectPork}/>
        <AnimatedPork manifestIsViewed={this.state.manifestIsViewed}  porkId={2} porks={ this.state.porks } selectPork={this.selectPork}/>
        <AnimatedPork manifestIsViewed={this.state.manifestIsViewed}  porkId={5} porks={ this.state.porks } selectPork={this.selectPork}/>
        {/* <AnimatedPork porkId={6}/>
        <AnimatedPork porkId={7}/> */}
      </PorkWrap>
    </React.Fragment>
    )
  }

}

export  default PorksUI;