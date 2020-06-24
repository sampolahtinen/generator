import React from 'react';
import styles from './Language.module.scss';
import BarGauge from '../../BarGauge';
import { LanguageProps } from './types';

const Language = ({ title, percentage }: LanguageProps) => {
  return (
    <div className={styles.language}>
      <div className={styles.titleWrapper}>
        <span className="highlighted-text">{title}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </div>
      <BarGauge value={percentage} />
    </div>
  );
};

export default Language;
