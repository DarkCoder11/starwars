import { HYDRATE } from 'next-redux-wrapper';

import {
  GET_PRODUCT,
  POST_ORDER,
  POST_ORDER_STARTED,
  POST_ORDER_ERROR,
} from '../actions/productActions';

const initialState = {
  info: {},
  relatedProducts: [],
  orderLoading: false,
  orderError: false,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.product };
    case GET_PRODUCT: {
      return { ...state, ...payload };
    }
    case POST_ORDER: {
      return { ...state, orderLoading: false, orderError: false };
    }
    case POST_ORDER_STARTED: {
      return { ...state, orderLoading: true };
    }
    case POST_ORDER_ERROR: {
      return { ...state, orderLoading: false, orderError: true };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
