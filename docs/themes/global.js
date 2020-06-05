import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    color: ${(props) => props.theme.mdxContent.textColor};
    background-color: ${(props) => props.theme.mdxContent.backgroundColor};
  }
`;
