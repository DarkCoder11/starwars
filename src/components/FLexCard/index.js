import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './FlexCard.scss';

import FlexButton from '../FlexButton';

const FlexCard = ({ data }) => {
  const { shortDescription, name, image: src, price } = data;
  const imageSource = `https://react-test-starwars.vercel.app${src}`;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={imageSource} alt={name} layout="fill" />
      </div>
      <p className={styles.name}>{name}</p>
      <p className={styles.description}>{shortDescription}</p>
      <FlexButton className={styles.buy}>Buy ${price}</FlexButton>
    </div>
  );
};

FlexCard.propTypes = {
  data: PropTypes.object,
};

FlexCard.defaultProps = {
  data: {},
};

export default FlexCard;
