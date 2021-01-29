import React from 'react';
import PropTypes from 'prop-types';

import { noop } from 'utils/index';

const FlexInput = ({ type, className, placeholder, onChange, value }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    className={className}
    placeholder={placeholder}
  />
);

FlexInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

FlexInput.defaultProps = {
  type: 'text',
  value: '',
  onChange: noop,
  className: null,
  placeholder: 'Enter text',
};

export default FlexInput;
