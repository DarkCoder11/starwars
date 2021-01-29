import { HYDRATE } from 'next-redux-wrapper';

import {
  GET_PRODUCTS,
  SET_CURRENT_PAGE,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_STARTED,
} from '../actions/productsActions';

const initialState = {
  error: false,
  loading: false,
  totalPages: 0,
  entities: [],
  currentPage: 1,
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.products };
    case GET_PRODUCTS: {
      const { entities, totalPages, isMore } = payload;

      return {
        ...state,
        totalPages,
        error: false,
        loading: false,
        entities: isMore ? [...state.entities, ...entities] : entities,
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: payload };
    }
    case GET_PRODUCTS_ERROR: {
      return { ...state, error: true, loading: false };
    }
    case GET_PRODUCTS_STARTED: {
      return { ...state, loading: true };
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
