import React from 'react';
import { LoadingProps } from './types';
import styles from './Loading.module.scss';

const Loading = ({ children }: LoadingProps) => (
  <div className={styles.loading}>
    <span>{children}</span>
  </div>
);

export default Loading;
