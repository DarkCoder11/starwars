import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRouter } from 'next/router';

import noop from 'utils/noop';

const FlexLink = ({
  to,
  onClick,
  children,
  disabled,
  queryKey,
  className,
  queryValue,
  anchorProps,
  activeClassName,
  ...linkProps
}) => {
  const { asPath, query } = useRouter();
  const anchorClasses = classNames(className, {
    [activeClassName]: query[queryKey]
      ? query[queryKey] === queryValue
      : asPath === to && activeClassName,
  });

  return (
    <Link href={to} {...linkProps}>
      <a
        role="button"
        className={anchorClasses}
        {...anchorProps}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  );
};

FlexLink.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.any,
  queryValue: PropTypes.any,
  anchorProps: PropTypes.any,
  queryKey: PropTypes.string,
  disabled: PropTypes.string,
  activeClassName: PropTypes.string,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

FlexLink.defaultProps = {
  children: [],
  onClick: noop,
  anchorProps: {},
  disabled: undefined,
  queryKey: undefined,
  className: undefined,
  queryValue: undefined,
  activeClassName: undefined,
};

export default FlexLink;
