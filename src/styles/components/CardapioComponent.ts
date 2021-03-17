import style from 'styled-components';

export const CardapioContainer = style.section`
  align-items: flex-start;
  background-color: #22120E;
  border-radius: 3px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  width: 85%;

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
  gap: 10px;
  margin-bottom: 20px;

  & div {
    display: flex;
  }

  & div:first-child {
    justify-content: space-between;
  }

  & div:last-child {
    gap: 10px;
  }
`;
