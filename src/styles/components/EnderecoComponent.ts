import style from 'styled-components';

const EnderecoContainer = style.form`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  margin-bottom: 10px;
  padding: 10px;
  width: 85%;

  label {
    display: flex;
    flex-direction: column;

    input {
      border: none;
      border-radius: 5px;
      height: 30px;
      text-align: center;
    }
  }

  @media(min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    label {
      width: 45%;
    }
  }
`;

export default EnderecoContainer;
