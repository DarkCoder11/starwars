import React from 'react';
import PropTypes from 'prop-types';

import { noop } from 'utils/index';

const FlexButton = ({ onClick, className, children, ...rest }) => (
  <button type="button" {...rest} onClick={onClick} className={className}>
    {children}
  </button>
);

FlexButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

FlexButton.defaultProps = {
  className: '',
  onClick: noop,
};

export default FlexButton;
