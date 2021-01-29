import React from 'react';

import { HelmetLayout } from 'layouts/index';
import { HomeContainer } from 'containers/index';
import { productsActions } from 'store/actions';

const HomePage = () => (
  <HelmetLayout
    title="Star Wars Figures"
    metaDescription="Find the latest products for the biggest fans of the iconic saga."
  >
    <HomeContainer />
  </HelmetLayout>
);

HomePage.getInitialProps = async ({ store }) => {
  await store.dispatch(productsActions.getProducts());

  return {};
};

export default HomePage;
