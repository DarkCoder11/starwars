import { createActionName } from 'utils/index';
import { axiosInstance } from 'libraries/index';

export const SET_CURRENT_PAGE = createActionName('products', 'current_page');

export const GET_PRODUCTS = createActionName('products', 'get_products');
export const GET_PRODUCTS_STARTED = createActionName(
  'products',
  'get_products_started',
);
export const GET_PRODUCTS_ERROR = createActionName(
  'products',
  'get_products_error',
);

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});

export const getProductsStarted = () => ({ type: GET_PRODUCTS_STARTED });
export const getProductsError = (err) => ({
  type: GET_PRODUCTS_ERROR,
  payload: err,
});
export const getProductsFinished = (data) => ({
  type: GET_PRODUCTS,
  payload: data,
});

export const getProducts = (isMore) => async (dispatch, getState) => {
  const { currentPage } = getState().products;

  try {
    dispatch(getProductsStarted());
    const { data } = await axiosInstance.get(`/products?page=${currentPage}`);

    dispatch(
      getProductsFinished({
        isMore,
        entities: data.data,
        totalPages: data.meta.totalPages,
      }),
    );
  } catch (err) {
    dispatch(getProductsError(err));
  }
};
