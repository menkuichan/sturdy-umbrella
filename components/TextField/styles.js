import styled from 'styled-components';

export const TextFieldContainer = styled.div``;

export const Input = styled.input`
  background-color: inherit;
  border-radius: 3px;
  padding: 5px;
  border: 1px solid
    ${(props) =>
      props.invalid
        ? props.theme.textField.invalidColor
        : props.theme.textField.borderColor};
  outline: none;
  color: ${(props) => props.theme.textField.textColor};

  &:focus {
    border: 1px solid
      ${(props) =>
        props.invalid
          ? props.theme.textField.invalidColor
          : props.theme.textField.focusedBorderColor};
  }

  &::placeholder {
    font-style: italic;
  }
`;
