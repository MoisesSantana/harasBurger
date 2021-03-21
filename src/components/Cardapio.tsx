import React, { useContext } from 'react';
import { HarasContext } from '../contexts/HarasContext';
import { alimentos, filtros } from '../data/listaDeAlimentos';
import {
  CardapioContainer,
  ElementoContainer,
} from '../styles/components/CardapioComponent';
import Detalhes from './Detalhes';

const Cardapio: React.FC = () => {
  const {
    filtroAtual,
    detalheAtivado,
    lidaComDetalhes,
    adicionaPedidos,
  } = useContext(HarasContext);

  const cardapioFiltrado = filtros.filter(({ nome }) => nome === filtroAtual)[0];
  const { tags } = cardapioFiltrado;

  return (
    <CardapioContainer>
      { detalheAtivado && <Detalhes />}
      {
        alimentos.map(({ tipo, lista }) => (
          tags.includes(tipo) && (
            <div key={tipo}>
              <h2>{ tipo }</h2>
              {
                lista.map((objeto) => (
                  <ElementoContainer key={objeto.nome}>
                    <div>
                      <p>{ objeto.nome }</p>
                      <span>{`R$${objeto.preco.toFixed(2)}`}</span>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => adicionaPedidos(objeto)}
                      >
                        Adicionar
                      </button>
                      <button
                        type="button"
                        onClick={() => lidaComDetalhes(objeto)}
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
