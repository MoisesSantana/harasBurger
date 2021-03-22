import style, { keyframes } from 'styled-components';

const correrATela = keyframes`
  0% {
    transform: translateX(-100%);
  }
  80% {
    transform: translateX(50%)
  }
  100% {
    transform: translateX(0%);
  }
`;

export const Overlay = style.div`
  align-items: center;
  background-color: rgba(242, 243, 245, 0.8);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export const PedidoFeitoContainer = style.section`
  animation: 0.5s ${correrATela} ease-out;
  background-color: #723022;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  padding: 2rem 3rem;
  position: relative;
  text-align: center;
  width: 100%;

  h1 {
    background-color: #22120E;
    font-size: 1.8rem;
  }

  button {
    width: 100%;
  }
`;
