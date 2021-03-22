import React, { useContext, useState } from 'react';
import { HarasContext } from '../contexts/HarasContext';
import PagamentoContainer from '../styles/components/PagamentoComponent';

interface LidaComMudancaProps {
  value: string;
  name: string;
}

const Pagamento: React.FC = () => {
  const { setFormaDePagamento } = useContext(HarasContext);

  const [pagamento, setPagamento] = useState('');
  const [troco, setTroco] = useState('');

  const lidaComMudanca = (target: LidaComMudancaProps) => {
    if (target.name === 'formaDePagamento') setPagamento(target.value);
    else setTroco(target.value);

    setFormaDePagamento({ forma: pagamento, troco });
  };

  return (
    <PagamentoContainer>
      <div>
        <label htmlFor="dinheiro">
          <input
            type="radio"
            name="formaDePagamento"
            id="dinheiro"
            value="dinheiro"
            onChange={({ target }) => lidaComMudanca(target)}
          />
          Dinheiro
        </label>
        <label htmlFor="debito">
          <input
            type="radio"
            name="formaDePagamento"
            id="debito"
            value="debito"
            onChange={({ target }) => lidaComMudanca(target)}
          />
          Débito
        </label>
        <label htmlFor="credito">
          <input
            type="radio"
            name="formaDePagamento"
            id="credito"
            value="credito"
            onChange={({ target }) => lidaComMudanca(target)}
          />
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
};

export default Pagamento;
