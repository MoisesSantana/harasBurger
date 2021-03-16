import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import MainContainer from '../styles/pages/homePage';

const Home: React.FC = () => (
  <MainContainer>
    <Head>
      <title>Hara&apos;s Burger</title>
    </Head>
    <Header />
    <div>
      oi
    </div>
    <div>
      oi
    </div>
  </MainContainer>
);

export default Home;
