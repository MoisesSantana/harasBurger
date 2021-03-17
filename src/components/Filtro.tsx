import React from 'react';
import { filtros } from '../data/listaDeAlimentos';
import FiltroContainer from '../styles/components/FiltroComponent';

const Filtro: React.FC = () => (
  <FiltroContainer
    name="filtra-categoria"
    id="filtra-categoria"
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

export default Filtro;
