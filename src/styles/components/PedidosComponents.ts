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
`;

export default PedidosContainer;
