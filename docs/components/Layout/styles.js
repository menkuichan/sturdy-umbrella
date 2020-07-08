import styled from 'styled-components';

export const MdxContainer = styled.div``;

export const MdxContent = styled.div``;

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
  margin-left: 5%;
  padding: 40px 20% 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FeedbackButton = styled.button`
  background-color: ${(props) => props.theme.feedbackButton.backgroundColor};
  box-shadow: 0 0 2px ${(props) => props.theme.feedbackButton.borderShadowColor};
  border: none;
  width: 150px;
  height: 35px;
  font-size: 14px;
  border-radius: 2px;
  margin: 50px 0;
  font-family: 'Source Sans Pro', sans-serif;
  color: ${(props) => props.theme.feedbackButton.textColor};

  &:focus {
    outline: 0;
  }
`;
