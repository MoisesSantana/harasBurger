import style from 'styled-components';

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

export const DetalheContainer = style.section`
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

  .precoParagraph {
    display: flex;
    font-size: 1.4rem;
    font-weight: 800;
    gap: 20px;
    justify-content: center;

    span {
      color: green;
    }
  }

  h2 {
    background-color: #22120E;
    font-size: 1rem;
  }

  button {
    border: none;
    color: #FAFFEB;
    font-weight: 800;
    padding: 10px 30px;
    margin-top: 15px;
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
    button {
      cursor: pointer;
    }
  }
`;
