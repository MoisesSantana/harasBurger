import React, { useContext, useEffect, useState } from 'react';
import { HarasContext } from '../contexts/HarasContext';
import EnderecoContainer from '../styles/components/EnderecoComponent';

interface LidaComMudancaProps {
  name: string;
  value: string;
}

const Endereco: React.FC = () => {
  const [valorRua, setValorRua] = useState('');
  const [valorNumero, setValorNumero] = useState('');
  const [valorBairro, setValorBairro] = useState('');
  const [valorComplemento, setValorComplemento] = useState('');

  const { setEnderecoCompleto } = useContext(HarasContext);

  useEffect(() => {
    setEnderecoCompleto({
      rua: valorRua,
      numero: valorNumero,
      bairro: valorBairro,
      complemento: valorComplemento,
    });
  }, [valorRua, valorNumero, valorBairro, valorComplemento]);

  const lidaComMudanca = (target: LidaComMudancaProps) => {
    if (target.name === 'rua' && target.name.trim() !== '') {
      setValorRua(target.value);
    }
    if (target.name === 'numero' && target.name.trim() !== '') {
      setValorNumero(target.value);
    }
    if (target.name === 'bairro' && target.name.trim() !== '') {
      setValorBairro(target.value);
    }
    if (target.name === 'complemento' && target.name.trim() !== '') {
      setValorComplemento(target.value);
    } else setValorComplemento('Sem Complemento');
  };

  return (
    <EnderecoContainer>
      <label htmlFor="rua">
        Rua:
        <input
          type="text"
          name="rua"
          id="rua"
          placeholder="ex: Pedro da Silva Dias"
          required
          value={valorRua}
          onChange={({ target }) => lidaComMudanca(target)}
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
          value={valorNumero}
          onChange={({ target }) => lidaComMudanca(target)}
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
          value={valorBairro}
          onChange={({ target }) => lidaComMudanca(target)}
        />
      </label>
      <label htmlFor="complemento">
        Complemento:
        <input
          type="text"
          name="complemento"
          id="complemento"
          placeholder="ex: lote: 22, quadra: 40"
          value={valorComplemento}
          onChange={({ target }) => lidaComMudanca(target)}
        />
      </label>
    </EnderecoContainer>
  );
};

export default Endereco;
