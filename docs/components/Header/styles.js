import styled from 'styled-components';

export const ThemeItem = styled.button`
  color: #ffffff;
  font-size: 14px;
  background: inherit;
  outline: none;
  border: none;
  padding: 5px;

  /* &:hover {
    background-color: ${(props) => props.theme.popover.itemHoverColor};
  } */
`;

export const ThemeButton = styled.button`
  background: inherit;
  outline: none;
  border: none;
  color: ${(props) => props.theme.header.textColor};
`;

export const ThemeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  height: 50px;
  justify-content: space-between;
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
