import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, invalid, disabled }) => (
  <div>
    <input
      type="checkbox"
      id="checkbox"
      disabled={disabled}
      invalid={invalid}
    />
    <label htmlFor="checkbox">{label}</label>
  </div>
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
