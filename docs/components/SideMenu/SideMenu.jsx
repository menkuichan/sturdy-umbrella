import React from 'react';
import PropTypes from 'prop-types';
import { MenuContainer } from './styles';

const SideMenu = ({ children }) => <MenuContainer>{children}</MenuContainer>;

SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideMenu;
