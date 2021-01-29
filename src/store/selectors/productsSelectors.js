import { createSelector } from 'reselect';

export const selectState = (state) => state.products;

export const selectProducts = createSelector(
  selectState,
  (productsState) => productsState.entities,
);

export const selectTotalPages = createSelector(
  selectState,
  (productsState) => productsState.totalPages,
);

export const selectCurrentPage = createSelector(
  selectState,
  (productsState) => productsState.currentPage,
);
