import style from 'styled-components';

const PagamentoContainer = style.section`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 10px;
  padding: 10px;
  padding-bottom: 80px;
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

  .troco {
    width: 100%;
  }

  @media(min-width: 768px) {
    div {
      margin-bottom: 30px;

      label {
        align-items: center;
        border: 1px solid black;
        border-radius: 5px;
        box-shadow: 3px 3px 5px black;
        cursor: pointer;
        display: flex;
        height: 50px;
        justify-content: center;
        width: 25%;
      }

      label:hover {
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      }
    }

    .troco {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;

export default PagamentoContainer;
