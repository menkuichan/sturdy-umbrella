import React from 'react';
import { Item, MenuContainer } from './styles';

const SideMenu = ({ children }) => (
  <MenuContainer>
    {children.map((link) => (
      <Item>{link}</Item>
    ))}
  </MenuContainer>
);

export default SideMenu;
