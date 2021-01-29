import lodashDebounce from 'lodash.debounce';

const createCallback = (debounce, handleOnScroll, options) => {
  if (debounce) {
    return lodashDebounce(handleOnScroll, debounce, options);
  }
  return handleOnScroll;
};

export default createCallback;
