import styled from 'styled-components';

export const Item = styled.button`
  color: #494949;
  text-transform: uppercase;
  font-size: 14px;
  background: inherit;
  padding: 15px;
  margin: 0 10px;
  outline: none;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.header.buttonHover};
    border-color: none;
}
`;

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.header.backgroundColor};
  padding-right: 10%;
  display: flex;
  justify-content: flex-end;
`;
