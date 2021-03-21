import style from 'styled-components';

const PagamentoContainer = style.section`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 10px;
  padding: 10px;
  width: 85%;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    
    label {
      font-family: sans-serif;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  troco {
    width: 100%;
  }
`;

export default PagamentoContainer;
