import React from 'react';
import {
  sanduiches,
  trios,
  porcao,
  bebidas,
  promocoes,
} from '../data/listaDeAlimentos';

const Header: React.FC = () => (
  <section>
    <div>
      <h2>Promoções</h2>
      {
        promocoes.map((objeto) => {
          const {
            nome,
            preco,
          } = objeto;
          return (
            <div key={ nome }>
              <p>{ nome }</p>
              <span>R${ preco.toFixed(2) }</span>
            </div>
          );
        })
      }
    </div>
    <div>
      <h2>Trios</h2>

    </div>
    <div>
      <h2>Sanduíches</h2>

    </div>
    <div>
      <h2>Bebidas</h2>

    </div>
    <div>
      <h2>Porções</h2>

    </div>
  </section>
);

export default Header;
