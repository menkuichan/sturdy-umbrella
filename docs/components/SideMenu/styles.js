import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: ${(props) => props.theme.sideMenu.backgroundColor};
`;
