import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxContainer, Input, Label } from './styles';

const Checkbox = ({ label, invalid, disabled }) => (
  <CheckboxContainer>
    <Input
      type="checkbox"
      id="checkbox"
      disabled={disabled}
      invalid={invalid}
    />
    <Label htmlFor="checkbox" invalid={invalid}>
      {label}
    </Label>
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  label: '',
  invalid: false,
  disabled: false,
};

Checkbox.propTypes = {
  label: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Checkbox;
