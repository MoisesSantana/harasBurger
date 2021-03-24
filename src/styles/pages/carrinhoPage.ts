import style, { keyframes } from 'styled-components';

const correrATela = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const MainContainer = style.main`
  animation: 0.2s ${correrATela} ease-out;

  h4 {
    background-color: rgba(255, 255, 255, 0.3);
    margin-bottom: 10px;
    text-align: center;
  }
`;

export default MainContainer;
