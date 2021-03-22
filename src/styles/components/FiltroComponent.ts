import style from 'styled-components';

const FiltroContainer = style.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: url(http://www.webcis.com.br/images/imagens-noticias/select/ico-seta-appearance.gif) no-repeat #FAFFEB;
  background-position: 100% center;
  border:1px solid #ddd;
  color: black;
  border: none;
  font-size: 1.5rem;
  height: 30px;
  width: 80%;
  text-align-last:center;
  
  &::placeholder {
    text-align: center;
  }

  option {
    font-size: 1rem;
  }
`;

export default FiltroContainer;
