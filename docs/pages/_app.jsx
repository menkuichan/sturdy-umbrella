import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import {
  MainContainer,
  AppContainer,
  MdxContainer,
  LinkText,
} from './styles';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';
import GlobalStyle from '../themes/global';

function MyApp({ Component }) {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <SideMenu>
          <Link href="/TextField" as="/TextField">
            <LinkText href="/TextField">TextField</LinkText>
          </Link>
          <Link href="/Checkbox" as="/Checkbox">
            <LinkText href="/Checkbox">Checkbox</LinkText>
          </Link>
        </SideMenu>
        <MainContainer>
          <Header
            onThemeChange={(type) => {
              setTheme(type);
            }}
          />
          <MdxContainer>
            <Component />
          </MdxContainer>
        </MainContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default MyApp;
