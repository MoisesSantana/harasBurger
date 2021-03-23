import React from 'react';
import Image from 'next/image';
import HeaderContainer from '../styles/components/HeaderComponent';

const Header: React.FC = () => (
  <HeaderContainer>
    <div>
      <Image
        src="/harasBurger-logo.jpg"
        alt="haras burger"
        width={50}
        height={50}
      />
    </div>
    <a
      href="https://api.whatsapp.com/send?1=pt_BRphone=5521973096257&text=Boa noite! Poderia me ajudar?"
      target="_blank"
      rel="noopener noreferrer"
    >
      Não consigo fazer meu pedido
    </a>
  </HeaderContainer>
);

export default Header;
