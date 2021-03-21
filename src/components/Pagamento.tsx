import React from 'react';
import PagamentoContainer from '../styles/components/PagamentoComponent';

const Pagamento: React.FC = () => {
  const troco = true;
  return (
    <PagamentoContainer>
      <div>

        <input
          type="radio"
          name="formaDePagamento"
          id="dinheiro"
        />
        <label htmlFor="dinheiro">
          Dinheiro
        </label>
        <input
          type="radio"
          name="formaDePagamento"
          id="debito"
        />
        <label htmlFor="debito">
          Débito
        </label>
        <input
          type="radio"
          name="formaDePagamento"
          id="credito"
        />
        <label htmlFor="credito">
          Crédito
        </label>
      </div>
      <label
        className="troco"
        htmlFor="troco"
      >
        Vai precisar de troco? Para quanto?
        <input
          type="text"
          name="troco"
          id="troco"
        />
      </label>
    </PagamentoContainer>
  );
}

export default Pagamento;
