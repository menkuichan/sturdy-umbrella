import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
import { theme } from '../../../constants';
import { HeaderContainer, ThemeItem, ThemeButton } from './styles';

const Header = ({ onThemeChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <ThemeButton type="button" onClick={() => setOpen(!open)}>
        Theme
      </ThemeButton>
      {open && (
        <Popover>
          <ThemeItem onClick={() => onThemeChange(theme.light)}>
            Light theme
          </ThemeItem>
          <ThemeItem onClick={() => onThemeChange(theme.dark)}>
            Dark theme
          </ThemeItem>
        </Popover>
      )}
    </HeaderContainer>
  );
};

Header.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
};

export default Header;
