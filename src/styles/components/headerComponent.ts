import style from 'styled-components';

const HeaderContainer = style.header`
  align-items: center;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.8);

  img {
    border-radius: 50%;
  }

  a {
    color: white;
    font-size: 0.8rem;
  }
`;

export default HeaderContainer;
