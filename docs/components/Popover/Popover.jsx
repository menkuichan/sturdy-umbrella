import React from 'react';
import PropTypes from 'prop-types';
import { PopoverContainer, Item } from './styles';

const Popover = ({ children }) => (
  <PopoverContainer>
    <Item>{children}</Item>
  </PopoverContainer>
);

Popover.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Popover;
