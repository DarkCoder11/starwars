import React from 'react';
import PropTypes from 'prop-types';

import { noop } from 'utils/index';

import styles from './FlexOrder.scss';

import FlexInput from '../FlexInput';
import FlexButton from '../FlexButton';

const FlexOrder = ({ email, onFormSubmit, onEmailChange }) => (
  <form className={styles.container} onSubmit={onFormSubmit}>
    <FlexInput
      type="email"
      value={email}
      placeholder="Email"
      onChange={onEmailChange}
    />
    <FlexButton type="submit">Pre-order Now</FlexButton>
  </form>
);

FlexOrder.propTypes = {
  email: PropTypes.string,
  onFormSubmit: PropTypes.func,
  onEmailChange: PropTypes.func,
};

FlexOrder.defaultProps = {
  email: null,
  onFormSubmit: noop,
  onEmailChange: noop,
};

export default FlexOrder;
