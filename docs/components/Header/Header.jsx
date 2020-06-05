import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '../../../constants';
import { HeaderContainer, Item } from './styles';

const Header = ({ onThemeChange }) => (
  <HeaderContainer>
    <Item onClick={() => onThemeChange(theme.light)}>Light theme</Item>
    <Item onClick={() => onThemeChange(theme.dark)}>Dark theme</Item>
  </HeaderContainer>
);

Header.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
};

export default Header;
