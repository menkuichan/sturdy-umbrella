import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
import { theme } from '../../../constants';
import {
  HeaderContainer,
  ThemeItem,
  ThemeButton,
  HeaderItem,
  ThemeButtonContainer,
} from './styles';

const Header = ({ onThemeChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderItem>
        <ThemeButton type="button" onClick={() => setOpen(!open)}>
          Theme
        </ThemeButton>
        {open && (
          <Popover onItemClick={() => setOpen(!open)}>
            <ThemeButtonContainer>
              <ThemeItem onClick={() => onThemeChange(theme.light)}>
                Light
              </ThemeItem>
              <ThemeItem onClick={() => onThemeChange(theme.dark)}>
                Dark
              </ThemeItem>
            </ThemeButtonContainer>
          </Popover>
        )}
      </HeaderItem>
    </HeaderContainer>
  );
};

Header.propTypes = {
  onThemeChange: PropTypes.func.isRequired,
};

export default Header;
