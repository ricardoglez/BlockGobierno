import React  from 'react';
import ReactDOM  from 'react-dom';
import styled, { keyframes } from 'styled-components';

import  Pork1  from '../PuercosSVG/P1';

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


const StyledPork = styled( Pork1 )`
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
  animation: ${jump} infinite 1s linear;
  :hover{
    animation-play-state: paused;
  }

`;




class AnimatedPork extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return <StyledPork />
  }

}; 

export default AnimatedPork;