import React, { useContext } from 'react';
import { HarasContext } from '../contexts/HarasContext';
import {
  Overlay,
  DetalheContainer,
} from '../styles/components/DetalhesComponent';

const Detalhes: React.FC = () => {
  const {
    lidaComDetalhes,
    alimentoSelecionado,
    adicionaPedidos,
  } = useContext(HarasContext);
  const {
    nome,
    preco,
    acompanhamento,
    ingredientes,
  } = alimentoSelecionado;

  return (
    <Overlay>
      <DetalheContainer>
        <div>
          <h1>{ nome }</h1>
        </div>
        <div>
          <p className="precoParagraph">
            Preço:
            <span>
              R$
              { preco.toFixed(2) }
            </span>
          </p>
        </div>
        { ingredientes.length > 0 && (
          <div>
            <h2>Ingredientes</h2>
            <ul>
              {
                ingredientes.map((ingrediente: string) => (
                  <li key={ingrediente}>{ ingrediente }</li>
                ))
              }
            </ul>
          </div>
        ) }
        { acompanhamento.length > 0 && (
          <div>
            <h2>Acompanha</h2>
            <ul>
              {
                acompanhamento.map((alimento: string) => (
                  <li key={alimento}>{ alimento }</li>
                ))
              }
            </ul>
          </div>
        )}
        <div>
          <button
            type="button"
            onClick={() => adicionaPedidos(alimentoSelecionado)}
          >
            Adicionar
          </button>
          <button
            type="button"
            onClick={() => lidaComDetalhes(alimentoSelecionado)}
          >
            Voltar
          </button>
        </div>
      </DetalheContainer>
    </Overlay>
  );
};

export default Detalhes;
