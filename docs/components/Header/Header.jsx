import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Popover from '../Popover';
import useOutsideClick from '../../hooks/useOutsideClick';
import { theme, EVENT_TYPE } from '../../../constants';
import {
  HeaderContainer,
  ThemeItem,
  ThemeButton,
  HeaderItem,
  ThemeButtonContainer,
} from './styles';

const Header = ({ onThemeChange }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setOpen(false), EVENT_TYPE.MOUSEDOWN);

  return (
    <HeaderContainer ref={wrapperRef}>
      <HeaderItem>
        <ThemeButton type="button" onClick={() => setOpen(!open)}>
          Theme
        </ThemeButton>
        {open && (
          <Popover onItemClick={() => setOpen(!open)}>
            <ThemeButtonContainer>
              {Object.keys(theme).map((item) => (
                <ThemeItem onClick={() => onThemeChange(item)}>
                  {item}
                </ThemeItem>
              ))}
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
