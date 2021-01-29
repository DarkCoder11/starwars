import {
  createNotification,
  NOTIFICATION_TYPE_ERROR,
  NOTIFICATION_TYPE_SUCCESS,
} from 'react-redux-notify';

import { createActionName } from 'utils/index';
import { axiosInstance } from 'libraries/index';

export const GET_PRODUCT_STARTED = createActionName(
  'product',
  'get_product_started',
);
export const GET_PRODUCT_ERROR = createActionName(
  'product',
  'get_product_error',
);
export const GET_PRODUCT = createActionName('product', 'get_product');

export const POST_ORDER_STARTED = createActionName(
  'product',
  'post_order_started',
);
export const POST_ORDER = createActionName('product', 'post_order');
export const POST_ORDER_ERROR = createActionName('product', 'post_order_error');

export const getProductError = (err) => ({
  type: GET_PRODUCT_ERROR,
  payload: err,
});
export const getProductFinished = (data) => ({
  type: GET_PRODUCT,
  payload: data,
});
export const getProductStarted = () => ({ type: GET_PRODUCT_STARTED });

export const postOrderError = (err) => ({
  type: POST_ORDER_ERROR,
  payload: err,
});
export const postOrderFinished = () => ({
  type: POST_ORDER,
});
export const postOrderStarted = () => ({ type: POST_ORDER_STARTED });

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch(getProductStarted());

    const { data } = await axiosInstance.get(`/products/${id}`);

    dispatch(
      getProductFinished({
        info: data.data.product,
        relatedProducts: data.data.relatedProducts,
      }),
    );
  } catch (err) {
    dispatch(getProductError(err));
  }
};

export const postOrder = (order) => async (dispatch) => {
  try {
    dispatch(postOrderStarted());

    const { data } = await axiosInstance.post('/pre-order', order);

    dispatch(postOrderFinished());
    dispatch(
      createNotification({
        message: data.data.message,
        type: NOTIFICATION_TYPE_SUCCESS,
      }),
    );
  } catch (error) {
    dispatch(postOrderError(error));
    dispatch(
      createNotification({
        message: error.message,
        type: NOTIFICATION_TYPE_ERROR,
      }),
    );
  }
};
