import style, { keyframes } from 'styled-components';

const correrATela = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const MainContainer = style.main`
  align-items: center;
  animation: 0.2s ${correrATela} ease-out;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export default MainContainer;
