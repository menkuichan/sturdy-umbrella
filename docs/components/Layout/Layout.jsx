import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import GlobalStyle from '../../themes/global';
import Header from '../Header';
import SideMenu from '../SideMenu';
import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';
import { theme } from '../../../constants';
import {
  MainContainer,
  AppContainer,
  MdxContainer,
  LinkText,
} from './styles';

const Layout = ({ children }) => {
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
            {children}
          </MdxContainer>
        </MainContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
