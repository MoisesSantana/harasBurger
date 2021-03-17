import style from 'styled-components';

const FiltroContainer = style.select`
  background-color: #FAFFEB;
  color: black;
  border: none;
  font-size: 1.5rem;
  text-align: center;
  width: 85%;
  text-align-last:center;
  
  &::placeholder {
    text-align: center;
  }
`;

export default FiltroContainer;
