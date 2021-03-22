import React, { useContext } from 'react';
import { HarasContext } from '../contexts/HarasContext';
import PedidosContainer from '../styles/components/PedidosComponents';

const Pedidos: React.FC = () => {
  const {
    pedidos,
    removePedidos,
  } = useContext(HarasContext);

  return (
    <PedidosContainer>
      { pedidos.length < 1 && <h3>Nenhum pedido registrado</h3> }
      {
        pedidos.map((objeto, indice) => (
          <li key={`${objeto.nome}-${indice}`}>
            {objeto.nome}
            <span>
              R$
              {objeto.preco.toFixed(2)}
            </span>
            <button
              type="button"
              onClick={() => removePedidos(objeto)}
            >
              Remover
            </button>
          </li>
        ))
      }
    </PedidosContainer>
  );
};

export default Pedidos;
