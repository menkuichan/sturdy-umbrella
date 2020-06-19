import React from 'react';
import PropTypes from 'prop-types';
import { TextFieldContainer, Input } from './styles';

const TextField = ({ label, invalid }) => (
  <TextFieldContainer>
    <Input type="text" placeholder={label} invalid={invalid} />
  </TextFieldContainer>
);

TextField.defaultProps = {
  label: '',
  invalid: false,
};

TextField.propTypes = {
  label: PropTypes.string,
  invalid: PropTypes.bool,
};

export default TextField;
