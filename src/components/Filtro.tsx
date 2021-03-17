import React from 'react';
import { filtros } from '../data/listaDeAlimentos';

const Filtro: React.FC = () => (
  <section>
    <select
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
    </select>
  </section>
);

export default Filtro;
