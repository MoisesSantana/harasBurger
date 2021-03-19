import React, { useContext } from 'react';
import { HarasContext } from '../contexts/HarasContext';
import { alimentos, filtros } from '../data/listaDeAlimentos';
import {
  CardapioContainer,
  ElementoContainer,
} from '../styles/components/CardapioComponent';

const Cardapio: React.FC = () => {
  const { filtroAtual } = useContext(HarasContext);
  const cardapioFiltrado = filtros.filter(({ nome }) => nome === filtroAtual)[0];
  const { tags } = cardapioFiltrado;

  return (
    <CardapioContainer>
      {
        alimentos.map(({ tipo, lista }) => (
          tags.includes(tipo) && (
            <div key={tipo}>
              <h2>{ tipo }</h2>
              {
                lista.map(({ nome, preco }) => (
                  <ElementoContainer key={nome}>
                    <div>
                      <p>{ nome }</p>
                      <span>{`R$${preco.toFixed(2)}`}</span>
                    </div>
                    <div>
                      <button
                        type="button"
                      >
                        Adicionar
                      </button>
                      <button
                        type="button"
                      >
                        Detalhes
                      </button>
                    </div>
                  </ElementoContainer>
                ))
              }
            </div>
          )
        ))
      }
    </CardapioContainer>
  );
};

export default Cardapio;
