import styled ,{ keyframes } from 'styled-components';

import BaseAnimation from '../BaseAnimation';

const SirenFrames = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SirenAnimation = styled( BaseAnimation )`
  animation-name: ${ SirenFrames }
`;

export default SirenAnimation;