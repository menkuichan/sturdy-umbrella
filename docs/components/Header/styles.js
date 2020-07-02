import styled from 'styled-components';

export const ThemeItem = styled.button`
  font-size: 14px;
  background: inherit;
  text-transform: capitalize;
  outline: none;
  border: none;
  color: ${(props) => props.theme.header.textColor};
  padding: 5px 15px;

  &:hover {
    background-color: ${(props) => props.theme.popover.itemHoverColor};
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.header.textColor};
`;

export const ThemeButton = styled.button`
  font-size: 14px;
  background: inherit;
  outline: none;
  border: none;
  text-transform: capitalize;
  color: ${(props) => props.theme.header.textColor};

  &:hover {
    color: ${(props) => props.theme.header.textHoverColor};
  }

  &::after {
    content: '';
    border: solid ${(props) => props.theme.header.textColor};
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    margin: ${(props) => (props.open ? '0' : '3px')} 10px;
    transform: ${(props) => (props.open ? 'rotate(-135deg)' : 'rotate(45deg)')};
  }
`;

export const ThemeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.header`
  position: relative;
  padding-right: 10%;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderItem = styled.div`
  position: relative;
  display: flex;
`;
