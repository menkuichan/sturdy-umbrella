import styled from 'styled-components';

export const MdxContainer = styled.div`
  margin-left: 5%;
`;

export const AppContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const LinkText = styled.a`
  color: ${(props) => props.theme.sideMenu.linkColor};
  text-decoration: none;
  color: inherit;
  text-decoration: inherit;
  font-weight: bold;
  font-size: 15px;
  padding: 20px 25px 0;
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 40px 20% 0 10%;
`;
