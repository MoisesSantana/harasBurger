import React from 'react';
import {
  sanduiches,
  trios,
  porcao,
  bebidas,
  promocoes,
} from '../data/listaDeAlimentos';
import {
  CardapioContainer,
  ElementoContainer,
} from '../styles/components/CardapioComponent';

const Cardapio: React.FC = () => (
  <CardapioContainer>
    <div>
      <h2>Promoções</h2>
      {
        promocoes.map(({ nome, preco }) => (
          <ElementoContainer key={ nome }>
            <div>
              <p>{ nome }</p>
              <span>R${ preco.toFixed(2) }</span>
            </div>
            <div>
              <button>Adicionar</button>
              <button>Detalhes</button>
            </div>
          </ElementoContainer>
        ))
      }
    </div>
    <div>
      <h2>Trios</h2>
      {
        trios.map(({ nome, preco }) => (
          <ElementoContainer key={ nome }>
            <div>
              <p>{ nome }</p>
              <span>R${ preco.toFixed(2) }</span>
            </div>
            <div>
              <button>Adicionar</button>
              <button>Detalhes</button>
            </div>
          </ElementoContainer>
        ))
      }
    </div>
    <div>
      <h2>Sanduíches</h2>
      {
        sanduiches.map(({ nome, preco }) => (
          <ElementoContainer key={ nome }>
            <div>
              <p>{ nome }</p>
              <span>R${ preco.toFixed(2) }</span>
            </div>
            <div>
              <button>Adicionar</button>
              <button>Detalhes</button>
            </div>
          </ElementoContainer>
        ))
      }
    </div>
    <div>
      <h2>Bebidas</h2>
      {
        bebidas.map(({ nome, preco }) => (
          <ElementoContainer key={ nome }>
            <div>
              <p>{ nome }</p>
              <span>R${ preco.toFixed(2) }</span>
            </div>
            <div>
              <button>Adicionar</button>
              <button>Detalhes</button>
            </div>
          </ElementoContainer>
        ))
      }
    </div>
    <div>
      <h2>Porções</h2>
      {
        porcao.map(({ nome, preco }) => (
          <ElementoContainer key={ nome }>
            <div>
              <p>{ nome }</p>
              <span>R${ preco.toFixed(2) }</span>
            </div>
            <div>
              <button>Adicionar</button>
              <button>Detalhes</button>
            </div>
          </ElementoContainer>
        ))
      }
    </div>
  </CardapioContainer>
);

export default Cardapio;
