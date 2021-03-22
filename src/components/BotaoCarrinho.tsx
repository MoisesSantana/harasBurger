import React, { useContext } from 'react';
import Link from 'next/link';
import BotaoCarrinhoContainer from '../styles/components/BotaoCarrinhoComponent';
import { HarasContext } from '../contexts/HarasContext';

const BotaoCarrinho: React.FC = () => {
  const { valorTotal } = useContext(HarasContext);

  return (
    <Link href="/carrinho">
      <BotaoCarrinhoContainer>
        <span>Ver Carrinho</span>
        <span>
          Total: R$
          { valorTotal.toFixed(2) }
        </span>
      </BotaoCarrinhoContainer>
    </Link>
  );
}


export default BotaoCarrinho;
