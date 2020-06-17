import styled from 'styled-components';

export const CheckboxContainer = styled.div``;

export const Input = styled.input``;

export const Label = styled.label`
  color: ${(props) =>
    props.invalid
      ? props.theme.checkbox.invalidColor
      : props.theme.checkbox.labelColor};
`;
