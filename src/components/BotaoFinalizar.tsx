import React, { useContext } from 'react';
import Link from 'next/link';
import BotaoFinalizarContainer from '../styles/components/BotaoFinalizarComponent';
import { HarasContext } from '../contexts/HarasContext';

const BotaoFinalizar: React.FC = () => {
  const { valorTotal } = useContext(HarasContext);
  return (
    <Link href="/carrinho">
      <BotaoFinalizarContainer>
        <span>Fazer pedido</span>
        <span>
          Total: R$
          { valorTotal.toFixed(2) }
        </span>
      </BotaoFinalizarContainer>
    </Link>
  );
}


export default BotaoFinalizar;
