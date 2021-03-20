import React from 'react';
import Header from '../components/Header';
import Pedidos from '../components/Pedidos';
import Endereco from '../components/Endereco';
import Pagamento from '../components/Pagamento';
import BotaoVoltar from '../components/BotaoVoltar';
import BotaoFinalizar from '../components/BotaoFinalizar';

const Carrinho: React.FC = () => (
  <div>
    <Header />
    <Pedidos />
    <Endereco />
    <Pagamento />
    <BotaoVoltar />
    <BotaoFinalizar />
  </div>
);

export default Carrinho;
