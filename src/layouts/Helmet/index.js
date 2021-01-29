import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { FlexHeader } from 'components/index';

const HelmetLayout = ({ children, title, metaDescription }) => (
  <>
    <Head>
      {title && <title>{title}</title>}
      {metaDescription && <meta name="description" content={metaDescription} />}
    </Head>
    <FlexHeader />
    {children}
  </>
);

HelmetLayout.defaultProps = {
  title: '',
  metaDescription: '',
};

HelmetLayout.propTypes = {
  title: PropTypes.string,
  metaDescription: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default HelmetLayout;
