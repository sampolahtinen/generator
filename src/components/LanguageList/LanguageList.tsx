import React from 'react';
import { UserLanguages, UserLanguageWithCount } from '../../store/user/types';
import Language from './Language/Language';
import styles from './LanguageList.module.scss';

export interface LanguageListProps {
  languages: UserLanguages;
}

const LanguageList = ({ languages }: LanguageListProps) => {
  return (
    <div className={styles.languageList}>
      {languages.list.map((lang: UserLanguageWithCount) => (
        <Language
          key={lang.title}
          title={lang.title}
          percentage={Math.ceil((lang.count / languages.totalCount) * 100)}
        />
      ))}
    </div>
  );
};

export default LanguageList;
