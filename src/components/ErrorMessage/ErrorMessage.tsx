import React from 'react';
import { ErrorMessageProps } from './types';
import styles from './ErrorMessage.module.scss';

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className={styles.errorMessage}>
    <span>{message}</span>
  </div>
);

export default ErrorMessage;
