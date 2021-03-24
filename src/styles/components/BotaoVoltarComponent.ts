import style from 'styled-components';

const BotaoVoltarContainer = style.header`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  width: 100%;

  img {
    border-radius: 50%;
  }

  a {
    color: white;
    font-size: 1.3rem;
    font-weight: 800;
  }
`;

export default BotaoVoltarContainer;
