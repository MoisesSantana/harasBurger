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
`;
