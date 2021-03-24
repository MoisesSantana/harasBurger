import style from 'styled-components';

export const CardapioContainer = style.section`
  align-items: flex-start;
  background-color: #22120E;
  border-radius: 3px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: auto;
  padding: 20px;
  padding-bottom: 50px;
  width: 85%;
  -webkit-flex-direction: column;

  h2 {
    text-transform: uppercase;
  }

  & div {
    width: 100%;
  }
`;

export const ElementoContainer = style.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  & div {
    display: flex;
  }

  & div:first-child {
    justify-content: space-between;
  }

  & div:last-child {
    justify-content: space-around;
  }

  button {
    border: none;
    color: #FAFFEB;
    font-weight: 800;
    padding: 10px 30px;
    text-shadow: 1px 1px 5px black;
  }

  button:first-child {
    background-color: #27AE60;
    border-radius: 10px 0 0 0;
  }

  button:last-child {
    background-color: #F77800;
    border-radius: 0 0 10px 0;
  }

  @media(min-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    -webkit-flex-direction: row;
    height: 5rem;

    button {
      cursor: pointer;
      width: 35%;
    }

    button:first-child {
      border-radius: 5px;
    }

    button:last-child {
      border-radius: 5px;
    }
  }
`;
