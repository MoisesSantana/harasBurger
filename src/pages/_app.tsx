import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { HarasProvider } from '../contexts/HarasContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <HarasProvider>
    <Component {...pageProps} />
    <GlobalStyle />
  </HarasProvider>
);

export default MyApp;
