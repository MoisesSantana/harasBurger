import React from 'react';
import EnderecoContainer from '../styles/components/EnderecoComponent';

const Endereco: React.FC = () => (
  <EnderecoContainer>
    <label htmlFor="rua">
      Rua:
      <input
        type="text"
        name="rua"
        id="rua"
        placeholder="ex: Pedro da Silva Dias"
        required
      />
    </label>
    <label htmlFor="numero">
      Número:
      <input
        type="text"
        name="numero"
        id="numero"
        placeholder="ex: 123"
        required
      />
    </label>
    <label htmlFor="bairro">
      Bairro:
      <input
        type="text"
        name="bairro"
        id="bairro"
        placeholder="ex: Cosmos"
        required
      />
    </label>
    <label htmlFor="complemento">
      Complemento:
      <input
        type="text"
        name="complemento"
        id="complemento"
        placeholder="ex: lote: 22, quadra: 40"
      />
    </label>
  </EnderecoContainer>
);

export default Endereco;
