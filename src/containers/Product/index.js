import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  createNotification,
  NOTIFICATION_TYPE_ERROR,
} from 'react-redux-notify';

import { productActions } from 'store/actions';
import { productSelectors } from 'store/selectors';
import { FlexCard, FlexLink, FlexOrder } from 'components/index';

import styles from './Product.scss';

const ProductContainer = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const { description, name, image: src, id: productId } = useSelector(
    productSelectors.selectProductInfo,
  );
  const relatedProducts = useSelector(productSelectors.selectRelatedProducts);
  const imageSource = `https://react-test-starwars.vercel.app${src}`;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      dispatch(
        productActions.postOrder({
          email,
          productId,
        }),
      );
    } else {
      dispatch(
        createNotification({
          message: 'Email is required',
          type: NOTIFICATION_TYPE_ERROR,
        }),
      );
    }
  };

  const renderRelatedProductsCards = useCallback(
    () =>
      relatedProducts.map((item) => (
        <FlexLink key={item.id} to="/product/[id]" as={`/product/${item.id}`}>
          <FlexCard data={item} />
        </FlexLink>
      )),
    [relatedProducts],
  );

  return (
    <section>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.card__image}>
            <Image alt={name} layout="fill" src={imageSource} />
          </div>
          <div className={styles.card__info}>
            <h2 className={styles.card__info_title}>{name}</h2>
            <p className={styles.card__info_subtitle}>{description}</p>
            <FlexOrder
              email={email}
              onFormSubmit={handleFormSubmit}
              onEmailChange={handleEmailChange}
            />
          </div>
        </div>
        <h3 className={styles.relateds__title}>Related Figures</h3>
        <div className={styles.relateds}>{renderRelatedProductsCards()}</div>
      </div>
    </section>
  );
};

export default ProductContainer;
