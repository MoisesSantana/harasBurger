import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BotaoVoltarContainer from '../styles/components/BotaoVoltarComponent';

const BotaoVoltar: React.FC = () => (
  <BotaoVoltarContainer>
    <Link href="/">
      <a>
        &#60; Voltar
      </a>
    </Link>
    <div>
      <Image
        src="/harasBurger-logo.jpg"
        alt="haras burger"
        width={50}
        height={50}
      />
    </div>
  </BotaoVoltarContainer>
);

export default BotaoVoltar;
