import React, { useContext } from 'react';
import { HarasContext } from '../contexts/HarasContext';

const Pedidos: React.FC = () => {
  const {
    pedidos,
    removePedidos,
  } = useContext(HarasContext);

  return(
    <ul>
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
    </ul>
  );
}

export default Pedidos;
