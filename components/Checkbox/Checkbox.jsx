import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxContainer, Input, Label } from './styles';

const Checkbox = ({ label, invalid, disabled }) => (
  <CheckboxContainer>
    <Input type="checkbox" id={label} disabled={disabled} invalid={invalid} />
    <Label htmlFor={label} disabled={disabled} invalid={invalid}>
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
