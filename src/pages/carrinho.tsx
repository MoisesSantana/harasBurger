import React from 'react';
import Pedidos from '../components/Pedidos';
import Endereco from '../components/Endereco';
import Pagamento from '../components/Pagamento';
import BotaoVoltar from '../components/BotaoVoltar';
import BotaoFinalizar from '../components/BotaoFinalizar';
import MainContainer from '../styles/pages/carrinhoPage';

const Carrinho: React.FC = () => (
  <MainContainer>
    <BotaoVoltar />
    <h4>Será cobrado taxa de entrega a parte</h4>
    <Pedidos />
    <h4>
      Informe seu endereço
    </h4>
    <Endereco />
    <h4>
      Selecione a forma de pagamento
    </h4>
    <Pagamento />
    <BotaoFinalizar />
  </MainContainer>
);

export default Carrinho;
