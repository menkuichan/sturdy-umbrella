import React from 'react';
import { HeaderContainer, Item } from './styles';

const Header = ({ onThemeChange }) => (
  <HeaderContainer>
    <Item onClick={() => onThemeChange('light')}>Light theme</Item>
    <Item onClick={() => onThemeChange('dark')}>Dark theme</Item>
  </HeaderContainer>
);

export default Header;
