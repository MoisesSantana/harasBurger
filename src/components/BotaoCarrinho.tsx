import React from 'react';
import Link from 'next/link';
import BotaoCarrinhoContainer from '../styles/components/BotaoCarrinhoComponent';

const BotaoCarrinho: React.FC = () => (
  <Link href="/carrinho">
    <BotaoCarrinhoContainer>
      Ver Carrinho
    </BotaoCarrinhoContainer>
  </Link>
);

export default BotaoCarrinho;
