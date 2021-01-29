import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { productsActions } from 'store/actions';
import { productsSelectors } from 'store/selectors';
import { FlexCard, FlexLink } from 'components/index';
import { useBottomScrollListener } from 'hooks/index';

import styles from './Home.scss';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelectors.selectProducts);
  const totalPages = useSelector(productsSelectors.selectTotalPages);
  const currentPage = useSelector(productsSelectors.selectCurrentPage);

  const handleOnDocumentBottom = useCallback(() => {
    const nextPage = currentPage + 1;

    if (nextPage <= totalPages) {
      dispatch(productsActions.setCurrentPage(nextPage));
      dispatch(productsActions.getProducts(true));
    }
  }, [currentPage, totalPages]);

  const renderProductsCards = useCallback(
    () =>
      products.map((item) => (
        <FlexLink key={item.id} to="/product/[id]" as={`/product/${item.id}`}>
          <FlexCard data={item} />
        </FlexLink>
      )),
    [products],
  );

  useBottomScrollListener(handleOnDocumentBottom);

  const containerRef = useBottomScrollListener(handleOnDocumentBottom);

  return (
    <section>
      <div className="container">
        <h1 className={styles.title}>Star Wars Figures</h1>
        <h3 className={styles.subtitle}>
          Find the latest products for the biggest fans of the iconic saga.
        </h3>
        <div ref={containerRef} className={styles.products}>
          {renderProductsCards()}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
