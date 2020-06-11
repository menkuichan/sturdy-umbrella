import styled from 'styled-components';

export const ThemeItem = styled.button`
  color: #ffffff;
  font-size: 14px;
  background: inherit;
  outline: none;
  border: none;
`;

export const ThemeButton = styled.button`
  background: inherit;
  outline: none;
  border: none;
  color: ${(props) => props.theme.header.textColor};
`;

export const HeaderContainer = styled.header`
  position: relative;
  padding-right: 10%;
  display: flex;
  justify-content: flex-end;
`;
