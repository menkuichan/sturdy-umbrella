import React from 'react';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { MainContainer, MdxContainer } from './styles';

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <SideMenu />
      <div>
        <Header />
        <MdxContainer>
          <Component {...pageProps} />
        </MdxContainer>
      </div>
    </MainContainer>
  );
}

export default MyApp;
