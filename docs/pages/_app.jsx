import React from 'react';
import Link from 'next/link';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { MainContainer, MdxContainer, LinkText } from './styles';

function MyApp({ Component }) {
  return (
    <MainContainer>
      <SideMenu>
        <Link href="/TextField" as="/TextField">
          <LinkText href="/TextField">TextField</LinkText>
        </Link>
        <Link href="/Checkbox" as="/Checkbox">
          <LinkText href="/Checkbox">Checkbox</LinkText>
        </Link>
      </SideMenu>
      <div>
        <Header />
        <MdxContainer>
          <Component />
        </MdxContainer>
      </div>
    </MainContainer>
  );
}

export default MyApp;
