import styled from 'styled-components';

export const CheckboxContainer = styled.div``;

export const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

export const Label = styled.label`
  display: inline-flex;
  user-select: none;
  color: ${(props) =>
    props.invalid
      ? props.theme.checkbox.invalidColor
      : props.disabled
      ? props.theme.checkbox.disabledColor
      : props.theme.checkbox.labelColor};

  &:before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid
      ${(props) =>
        props.invalid
          ? props.theme.checkbox.invalidColor
          : props.theme.checkbox.labelColor};
    border-radius: 2px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }

  ${Input}:disabled + &:before {
    border: 1px solid ${(props) => props.theme.checkbox.disabledColor};
  }

  ${Input}:checked + &:before {
    border-color: ${(props) =>
      props.invalid
        ? props.theme.checkbox.invalidColor
        : props.theme.checkbox.checkedColor};
    background-color: ${(props) =>
      props.invalid
        ? props.theme.checkbox.invalidColor
        : props.theme.checkbox.checkedColor};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
`;
