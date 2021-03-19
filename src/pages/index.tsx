import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Cardapio from '../components/Cardapio';
import Filtro from '../components/Filtro';
import BotaoCarrinho from '../components/BotaoCarrinho';
import MainContainer from '../styles/pages/homePage';

const Home: React.FC = () => (
  <MainContainer>
    <Head>
      <title>Hara&apos;s Burger</title>
    </Head>
    <Header />
    <Filtro />
    <Cardapio />
    <BotaoCarrinho />
  </MainContainer>
);

export default Home;
