import React from 'react';

const Pagamento: React.FC = () => (
  <div>
    <div>
      <input
        type="radio"
        name="formaDePagamento"
        id="dinheiro"
      />
      <label htmlFor="dinheiro">
        Dinheiro
      </label>
    </div>
    <div>
      <input
        type="radio"
        name="formaDePagamento"
        id="debito"
      />
      <label htmlFor="debito">
        Débito
      </label>
    </div>
    <div>
      <input
        type="radio"
        name="formaDePagamento"
        id="credito"
      />
      <label htmlFor="credito">
        Crédito
      </label>
    </div>
  </div>
);

export default Pagamento;
