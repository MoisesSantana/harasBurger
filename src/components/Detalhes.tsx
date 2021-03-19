import React from 'react';

const Detalhes: React.FC = () => {
  
  return (
    <section>
      <div>
        <h1>Nome do Alimento</h1>
      </div>
      <div>
        <p>
          Preço:
          <span>
            R$00,00
          </span>
        </p>
      </div>
      <div>
        <ul>
          <li>ingrediente 1</li>
          <li>ingrediente 2</li>
          <li>informação 1</li>
        </ul>
      </div>
    </section>
  );
};

export default Detalhes;
