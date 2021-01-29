import React from 'react';

import { paths } from 'routes/index';

import styles from './Header.scss';

import FlexLink from '../FlexLink';
import { StarWarsLogo } from '../../icons';

const FlexHeader = () => (
  <header className={`container ${styles.content}`}>
    <FlexLink to={paths.home}>
      <StarWarsLogo />
    </FlexLink>
  </header>
);

export default FlexHeader;
