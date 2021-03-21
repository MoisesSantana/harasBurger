import React from 'react';
import Header from '../components/Header';
import Pedidos from '../components/Pedidos';
import Endereco from '../components/Endereco';
import Pagamento from '../components/Pagamento';
import BotaoVoltar from '../components/BotaoVoltar';
import BotaoFinalizar from '../components/BotaoFinalizar';
import MainContainer from '../styles/pages/carrinhoPage';

const Carrinho: React.FC = () => (
  <MainContainer>
    <Header />
    <h4>Será cobrado taxa de entrega a parte</h4>
    <Pedidos />
    <Endereco />
    <Pagamento />
    <BotaoVoltar />
    <BotaoFinalizar />
  </MainContainer>
);

export default Carrinho;
