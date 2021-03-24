import style from 'styled-components';

const HeaderContainer = style.header`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  width: 100%;

  img {
    border-radius: 50%;
  }

  a {
    color: white;
    font-size: 0.8rem;
  }
`;

export default HeaderContainer;
