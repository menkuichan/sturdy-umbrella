import React from 'react';
import PropTypes from 'prop-types';
import { PopoverContainer, Item } from './styles';

const Popover = ({ children, onItemClick }) => (
  <PopoverContainer>
    <Item onClick={() => onItemClick()}>{children}</Item>
  </PopoverContainer>
);

Popover.propTypes = {
  children: PropTypes.node.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Popover;
