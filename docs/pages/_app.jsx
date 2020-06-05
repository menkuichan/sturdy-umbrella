import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import { theme } from '../../constants';

function App({ Component }) {
  const [currentTheme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={currentTheme === theme.dark ? darkTheme : lightTheme}>
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

App.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default App;
