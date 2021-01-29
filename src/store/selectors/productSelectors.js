import { createSelector } from 'reselect';

export const selectState = (state) => state.product;

export const selectProductInfo = createSelector(
  selectState,
  (productState) => productState.info,
);

export const selectRelatedProducts = createSelector(
  selectState,
  (productState) => productState.relatedProducts,
);
