import React from 'react';
import PropTypes from 'prop-types';
import { TextFieldContainer, Input } from './styles';

const TextField = ({ label, invalid, disabled }) => (
  <TextFieldContainer>
    <Input
      type="text"
      placeholder={label}
      disabled={disabled}
      invalid={invalid}
    />
  </TextFieldContainer>
);

TextField.defaultProps = {
  label: '',
  invalid: false,
  disabled: false,
};

TextField.propTypes = {
  label: PropTypes.string,
  invalid: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default TextField;
