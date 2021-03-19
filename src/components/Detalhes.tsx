import React, { useContext } from 'react';
import { HarasContext } from '../contexts/HarasContext';
import {
  Overlay,
  DetalheContainer,
} from '../styles/components/DetalhesComponent';

const Detalhes: React.FC = () => {
  const { alimentoSelecionado: {
    nome,
    preco,
    acompanhamento,
    ingredientes,
  } } = useContext(HarasContext);

  return (
    <Overlay>
      <DetalheContainer>
        <div>
          <h1>{ nome }</h1>
        </div>
        <div>
          <p>
            Preço:
            <span>
              R${ preco.toFixed(2) }
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
        <button>
          Adicionar
        </button>
        <button>
          Voltar
        </button>
      </DetalheContainer>
    </Overlay>
  );
};

export default Detalhes;
