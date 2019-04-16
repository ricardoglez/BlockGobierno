import React  from 'react';
import ReactDOM  from 'react-dom';
import styled, { keyframes } from 'styled-components';

import  Pork1  from '../PuercosSVG/P1';
import  Pork2  from '../PuercosSVG/P2';
import  Pork3  from '../PuercosSVG/P3';
import  Pork4  from '../PuercosSVG/P4';
import  Pork5  from '../PuercosSVG/P5';
import  Pork6  from '../PuercosSVG/P6';
import  Pork7  from '../PuercosSVG/P7';


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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fade = keyframes`
0% {
fill:#61DAFB;
}
50% {
 fill:#999;
}
100%{
  fill:#61DAFB;
}
`;



const pulse = keyframes`
0% {
  transform: scale(1);
  ${'' /* opacity: 1; */}
  transform-origin: center;
}
33% {
  transform: scale(1.05);
  ${'' /* opacity: 0; */}
  transform-origin: center;
}

100% {
  transform: scale(1);
  ${'' /* opacity: 0; */}
  transform-origin: center;
}
`;

const jump = keyframes`
0% {
  transform: translateY( 0px );
  transform-origin: center;
}
25% {
  transform: translateY( 10px );
  transform-origin: center;
}
50% {
  transform: translateY( 0px );
}
75% {
  transform: translateY( -10px );
}
100% {
  transform: translateY( 0px );
}
`;

const jumpRotate = keyframes`
0% {
  transform: translateY( 0px ) rotate(0deg);
}
25% {
  transform: translateY( 2px ) rotate(1deg);
}
50% {
  transform: translateY( 0px ) rotate(-1deg);
}
75% {
  transform: translateY( -2px ) rotate(0deg);
}
100% {
  transform: translateY( 0px ) rotate(0deg);
}
`;


const march = keyframes`
0% {
  transform: translateY( 0px );
  transform-origin: center;
}
25% {
  transform: translateY( 2px );
  transform-origin: center;
}
50% {
  transform: translateY( 0px );
}
75% {
  transform: translateY( -5px );
}
100% {
  transform: translateY( 0px );
}
`;

const PorkItem = styled.div`
  display:flex;
  flex:1 1 15%;
  ${'' /* width:15%;   */}
`

const StyledPork1 = styled( Pork1 )`
  .shield{
      animation: ${jumpRotate} infinite 1s linear;
    :hover{
    animation: ${pulse} infinite 1.2s linear;
    }
  }
  .mainBoot{
    animation: ${march} infinite .5s linear;
    :hover{
       animation-play-state: paused;
    }
  }
     
      
    filter: drop-shadow(0px 0px 80px rgba( 255, 255, 255 ,.8 ) );
    animation: ${jump} infinite 1s linear;
    :hover{
      animation-play-state: paused;
    }
    &.selected{
      animation: ${GlowFrames} infinite 1.2s ease-in;
      *{
        
      }
    }
  `;

const StyledPork2 = styled( Pork2 )`
margin:auto;
  .shield{
    animation: ${pulse} infinite 1.2s linear;
    :hover{
      animation: ${jumpRotate} infinite 1s linear;
    }
  }
  .mainBoot{
    animation: ${march} infinite .5s linear;
    :hover{
       animation-play-state: paused;
    }
  }
     
      
    filter: drop-shadow(0px 0px 80px rgba( 255, 255, 255 ,.8 ) );
    animation: ${jump} infinite 1s linear;
    :hover{
      animation-play-state: paused;
    }
    &.selected{
      animation: ${GlowFrames} infinite 1.2s ease-in;
      *{
        
      }
  `;

const StyledPork3 = styled( Pork7 )`
  .shield{
      animation: ${jumpRotate} infinite 1.2s linear;
    :hover{
    animation: ${pulse} infinite 1.5s linear;
    }
  }
  .mainBoot{
    animation: ${march} infinite .5s linear;
    :hover{
       animation-play-state: paused;
    }
  }
     
      
    filter: drop-shadow(0px 0px 80px rgba( 255, 255, 255 ,.8 ) );
    animation: ${jump} infinite 1s linear;
    :hover{
      animation-play-state: paused;
    }
    &.selected{
      animation: ${GlowFrames} infinite 1.2s ease-in;
      *{
        
      }
  `;

const StyledPork4 = styled( Pork4 )`
  .shield{
      animation: ${pulse} infinite .8s linear;
    :hover{
    animation: ${pulse} infinite 1.2s linear;
    }
  }
  .mainBoot{
    animation: ${march} infinite .5s linear;
    :hover{
       animation-play-state: paused;
    }
  }
     
      
    filter: drop-shadow(0px 0px 80px rgba( 255, 255, 255 ,.8 ) );
    animation: ${jump} infinite 1s linear;
    :hover{
      animation-play-state: paused;
    }
    &.selected{
      animation: ${GlowFrames} infinite 1.2s ease-in;
      *{
        
      }
  `;

const StyledPork5 = styled( Pork5 )`
  .shield{
      animation: ${jumpRotate} infinite 1s linear;
    :hover{
    animation: ${pulse} infinite 1.2s linear;
    }
  }
  .mainBoot{
    animation: ${march} infinite .5s linear;
    :hover{
       animation-play-state: paused;
    }
  }
     
      
    filter: drop-shadow(0px 0px 80px rgba( 255, 255, 255 ,.8 ) );
    animation: ${jump} infinite 1s linear;
    :hover{
      animation-play-state: paused;
    }
    &.selected{
      animation: ${GlowFrames} infinite 1.2s ease-in;
      *{
        
      }
  `;

const StyledPork6 = styled( Pork6 )`
  .shield{
      animation: ${jumpRotate} infinite 1s linear;
    :hover{
    animation: ${pulse} infinite 1.2s linear;
    }
  }
  .mainBoot{
    animation: ${march} infinite .5s linear;
    :hover{
       animation-play-state: paused;
    }
  }
     
      
    filter: drop-shadow(0px 0px 80px rgba( 255, 255, 255 ,.8 ) );
    animation: ${jump} infinite 1s linear;
    :hover{
      animation-play-state: paused;
    }
    &.selected{
      animation: ${GlowFrames} infinite 1.2s ease-in;
      *{
        
      }
  `;

const StyledPork7 = styled( Pork7 )`
  .shield{
      animation: ${jumpRotate} infinite 1s linear;
    :hover{
    animation: ${pulse} infinite 1.2s linear;
    }
  }
  .mainBoot{
    animation: ${march} infinite .5s linear;
    :hover{
       animation-play-state: paused;
    }
  }
     
      
    filter: drop-shadow(0px 0px 80px rgba( 255, 255, 255 ,.8 ) );
    animation: ${jump} infinite 1s linear;
    :hover{
      animation-play-state: paused;
    }
    &.selected{
      animation: ${GlowFrames} infinite 1.2s ease-in;
      *{
        
      }
  `;



class AnimatedPork extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
    
    this.rendererPork = ( porkId )=> {
      let conditionalComponent = null;
      
      let currentPork = this.props.porks[ porkId ];

      //console.log( currentPork );

      switch( porkId ){
        case 1:
          conditionalComponent = (
          <PorkItem>
            <StyledPork1 
              className={`${ currentPork && currentPork.isSelected || this.props.manifestIsViewed ? 'selected' : '' }`} 
              onClick={ () => { this.props.selectPork( porkId ) } }/>
          </PorkItem> 
          )
        break;
        case 2:
        conditionalComponent = (
        <PorkItem>
          <StyledPork2 
            className={`${ currentPork && currentPork.isSelected || this.props.manifestIsViewed ? 'selected' : '' }`} 
            onClick={ () => { this.props.selectPork( porkId ) } } />
        </PorkItem> 
        )
        break;
        case 3:
        conditionalComponent = (
        <PorkItem>
          <StyledPork3 
            className={`${ currentPork && currentPork.isSelected || this.props.manifestIsViewed ? 'selected' : '' }`} 
              onClick={ () => { this.props.selectPork( porkId ) } }
          />
        </PorkItem> 
        )
        break;
        case 4:
        conditionalComponent = (
        <PorkItem>
          <StyledPork4 
            className={`${ currentPork && currentPork.isSelected || this.props.manifestIsViewed ? 'selected' : '' }`} 
            onClick={ () => { this.props.selectPork( porkId ) } }
          />
        </PorkItem> 
        )
        break;
        case 5:
        conditionalComponent = (
        <PorkItem>
          <StyledPork5 
            className={`${ currentPork && currentPork.isSelected || this.props.manifestIsViewed ? 'selected' : '' }`} 
            onClick={ () => { this.props.selectPork( porkId ) } }
          />
        </PorkItem> 
        )
        break;
        case 6:
        conditionalComponent = (
        <PorkItem>
          <StyledPork6 
            className={`${ currentPork && currentPork.isSelected || this.props.manifestIsViewed ? 'selected' : '' }`} 
            onClick={ () => { this.props.selectPork( porkId ) } }
          />
        </PorkItem> 
        )
        break;
        case 7:
        conditionalComponent = (
        <PorkItem>
          <StyledPork7
            className={`${ currentPork && currentPork.isSelected || this.props.manifestIsViewed ? 'selected' : '' }`} 
            onClick={ () => { this.props.selectPork( porkId ) } }
          />
        </PorkItem> 
        )
        break;
      }

      return conditionalComponent
    }
  }

  render(){
    return this.rendererPork( this.props.porkId)
  }

}; 

export default AnimatedPork;