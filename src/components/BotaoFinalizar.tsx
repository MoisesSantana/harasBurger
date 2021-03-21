import React from 'react';
import Link from 'next/link';
import BotaoFinalizarContainer from '../styles/components/BotaoFinalizarComponent';

const BotaoFinalizar: React.FC = () => (
  <Link href="/carrinho">
    <BotaoFinalizarContainer>
      Fazer pedido!!!
    </BotaoFinalizarContainer>
  </Link>
);

export default BotaoFinalizar;
