import styled from 'styled-components';

export const ThemeItem = styled.button`
  color: #ffffff;
  font-size: 14px;
  background: inherit;
  outline: none;
  border: none;
  color: ${(props) => props.theme.header.textColor};
  padding: 5px 15px;

  &:hover {
    background-color: ${(props) => props.theme.popover.itemHoverColor};
  }
`;

export const ThemeButton = styled.button`
  background: inherit;
  outline: none;
  border: none;
  color: ${(props) => props.theme.header.textColor};

  &:hover {
    color: ${(props) => props.theme.header.textHoverColor};
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
`;
