import style from 'styled-components';

const EnderecoContainer = style.form`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
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
`;

export default EnderecoContainer;
