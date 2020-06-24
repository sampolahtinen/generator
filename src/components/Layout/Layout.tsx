import React, { Fragment } from 'react';
import NavBar from '../NavBar';
import { LayoutProps } from './types';
import styles from './Layout.module.scss';
import Footer from '../Footer';

const Layout = ({ children }: LayoutProps) => (
  <Fragment>
    <NavBar />
    <div className={styles.layout}>{children}</div>
    <Footer />
  </Fragment>
);

export default Layout;
