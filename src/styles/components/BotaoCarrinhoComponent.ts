import style from 'styled-components';

const BotaoCarrinhoContainer = style.a`
  background-color: #4CD137;
  bottom: 0;
  border: none;
  box-shadow: 0 -10px 20px black;
  color: #FAFFEB;
  display: flex;
  font-family: sans-serif;
  font-weight: 600;
  justify-content: space-around;
  padding: 15px;
  position: fixed;
  text-shadow: 1px 1px 3px black;
  text-align: center;
  text-transform: uppercase;
  width: 100%;

  @media(min-width: 768px) {
    cursor: pointer;
    
    max-width: 800px;
    width: 98%;
  }
`;

export default BotaoCarrinhoContainer;
