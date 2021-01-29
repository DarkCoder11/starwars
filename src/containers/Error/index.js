import React from 'react';

import { paths } from 'routes/index';
import { FlexButton, FlexLink } from 'components/index';

import styles from './Error.scss';

const ErrorContainer = () => (
  <div className={styles.container}>
    <h1>404</h1>
    <FlexButton>
      <FlexLink to={paths.home}>Go To Home</FlexLink>
    </FlexButton>
  </div>
);

export default ErrorContainer;
