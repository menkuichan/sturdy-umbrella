import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Link from 'next/link';
import GlobalStyle from '../../themes/global';
import Header from '../Header';
import SideMenu from '../SideMenu';
import lightTheme from '../../themes/light';
import darkTheme from '../../themes/dark';
import { getAutoTheme } from '../../utils';
import { theme } from '../../../constants';
import { MainContainer, AppContainer, MdxContainer, LinkText } from './styles';

const Layout = ({ children }) => {
  const [currentTheme, setTheme] = useState(theme.dark);
  const [autoTheme, setAutoTheme] = useState(false);

  const saveTheme = (type) => {
    setTheme(type);
    sessionStorage.setItem('theme', type);
  };

  const checkTheme = (type) => {
    if (type === theme.auto) {
      setAutoTheme(true);
      saveTheme(getAutoTheme());
    } else {
      setAutoTheme(false);
      saveTheme(type);
    }
  };

  useEffect(() => {
    if (autoTheme) {
      saveTheme(getAutoTheme());
    }
  });

  useEffect(() => {
    const storedTheme = sessionStorage.getItem('theme');
    if (storedTheme && storedTheme !== currentTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={currentTheme === theme.dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AppContainer>
        <SideMenu>
          <Link href="/TextField" as={`${process.env.ASSET_PREFIX}/TextField`}>
            <LinkText href="/TextField">TextField</LinkText>
          </Link>
          <Link href="/Checkbox" as={`${process.env.ASSET_PREFIX}/Checkbox`}>
            <LinkText href="/Checkbox">Checkbox</LinkText>
          </Link>
        </SideMenu>
        <MainContainer>
          <Header
            onThemeChange={(type) => {
              checkTheme(type);
            }}
          />
          <MdxContainer>{children}</MdxContainer>
        </MainContainer>
      </AppContainer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
