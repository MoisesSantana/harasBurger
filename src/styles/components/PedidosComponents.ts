import style from 'styled-components';

const PedidosContainer = style.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-around;
  margin: auto;
  margin-bottom: 10px;
  width: 80vw;

  h3 {
    text-align: center;
    width: 100%;
  }

  li {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    padding: 10px;
    width: 100%;
  }

  span {
    color: green;
    font-weight: 600;
  }

  button {
    background-color: red;
    border-radius: 5px;
    border: none;
    color: black;
    font-weight: 600;
    height: 30px;
    text-transform: uppercase;
  }

  @media(min-width: 768px) {
    li {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      height: 5rem;

      div {
        display: flex;
        justify-content: space-between;
        width: 45%;
      }

      button {
        cursor: pointer;
        width: 45%;
      }
    }
  }
`;

export default PedidosContainer;
