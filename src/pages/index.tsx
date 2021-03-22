import React, { useContext } from 'react';
import Header from '../components/Header';
import Cardapio from '../components/Cardapio';
import Filtro from '../components/Filtro';
import Detalhes from '../components/Detalhes';

import BotaoCarrinho from '../components/BotaoCarrinho';
import MainContainer from '../styles/pages/homePage';
import { HarasContext } from '../contexts/HarasContext';
import PedidoFeito from '../components/PedidoFeito';

const Home: React.FC = () => {
  const { detalheAtivado, renderizaPedidoFeito } = useContext(HarasContext);
  return (
    <MainContainer>
      { detalheAtivado && <Detalhes />}
      { renderizaPedidoFeito && <PedidoFeito />}
      <Header />
      <Filtro />
      <Cardapio />
      <BotaoCarrinho />
    </MainContainer>
  );
};


export default Home;
