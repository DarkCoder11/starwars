import { useCallback, useEffect, useRef, useMemo } from 'react';

import { createCallback } from 'utils/index';

const useBottomScrollListener = (onBottom, options) => {
  const { offset, triggerOnNoScroll, debounce, debounceOptions } = useMemo(
    () => ({
      offset: options?.offset ?? 0,
      debounce: options?.debounce ?? 200,
      debounceOptions: options?.debounceOptions ?? { leading: true },
      triggerOnNoScroll: options?.triggerOnNoScroll ?? false,
    }),
    [
      options?.offset,
      options?.debounce,
      options?.debounceOptions,
      options?.triggerOnNoScroll,
    ],
  );
  const debouncedOnBottom = useMemo(
    () => createCallback(debounce, onBottom, debounceOptions),
    [debounce, onBottom],
  );

  const containerRef = useRef(null);

  const handleOnScroll = useCallback(() => {
    if (containerRef.current != null) {
      const scrollNode = containerRef.current;
      const scrollContainerBottomPosition = Math.round(
        scrollNode.scrollTop + scrollNode.clientHeight,
      );
      const scrollPosition = Math.round(scrollNode.scrollHeight - offset);

      if (scrollPosition <= scrollContainerBottomPosition) {
        debouncedOnBottom();
      }
    } else {
      const scrollNode = document.scrollingElement || document.documentElement;
      const scrollContainerBottomPosition = Math.round(
        scrollNode.scrollTop + window.innerHeight,
      );
      const scrollPosition = Math.round(scrollNode.scrollHeight - offset);

      if (scrollPosition <= scrollContainerBottomPosition) {
        debouncedOnBottom();
      }
    }
  }, [offset, onBottom, containerRef.current]);

  useEffect(() => {
    const ref = containerRef.current;

    if (ref !== null) {
      ref.addEventListener('scroll', handleOnScroll);
    } else {
      window.addEventListener('scroll', handleOnScroll);
    }

    if (triggerOnNoScroll) {
      handleOnScroll();
    }

    return () => {
      if (ref !== null) {
        ref.removeEventListener('scroll', handleOnScroll);
      } else {
        window.removeEventListener('scroll', handleOnScroll);
      }
    };
  }, [handleOnScroll, debounce]);

  return containerRef;
};

export default useBottomScrollListener;
