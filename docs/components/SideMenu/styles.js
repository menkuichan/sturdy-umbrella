import styled from 'styled-components';

export const Item = styled.h1`
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.sideMenu.linkColor};
`;

export const MenuContainer = styled.div`
  width: 20%;
  background-color: ${(props) => props.theme.sideMenu.backgroundColor};
`;
