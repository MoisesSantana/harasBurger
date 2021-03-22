import React from 'react';
import {
  Overlay,
  PedidoFeitoContainer,
} from '../styles/components/PedidoFeitoComponent';

const PedidoFeito: React.FC = () => {

  return (
    <Overlay>
      <PedidoFeitoContainer>
          <h1>Adicionado</h1>
      </PedidoFeitoContainer>
    </Overlay>
  );
};

export default PedidoFeito;
