import React, { useContext } from 'react';
import { HarasContext } from '../contexts/HarasContext';
import { filtros } from '../data/listaDeAlimentos';
import FiltroContainer from '../styles/components/FiltroComponent';

const Filtro: React.FC = () => {
  const { setFiltroAtual } = useContext(HarasContext);

  return (
    <FiltroContainer
      name="filtra-categoria"
      id="filtra-categoria"
      onChange={({ target: { value } }) => setFiltroAtual(value)}
    >
      {
        filtros.map(({ nome }) => (
          <option
            value={nome}
            key={nome}
          >
            {nome}
          </option>
        ))
      }
    </FiltroContainer>
  );
};

export default Filtro;
