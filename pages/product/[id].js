import React from 'react';

import { HelmetLayout } from 'layouts/index';
import { ProductContainer } from 'containers/index';
import { productsActions, productActions } from 'store/actions';

const ProductPage = () => (
  <HelmetLayout title="Product" metaDescription="Star Wars product page">
    <ProductContainer />
  </HelmetLayout>
);

ProductPage.getInitialProps = async ({ store, query }) => {
  const { dispatch } = store;

  dispatch(productsActions.setCurrentPage(1));
  await dispatch(productActions.getProduct(query.id));

  return {};
};

export default ProductPage;
