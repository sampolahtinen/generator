import React from 'react';
import cx from 'classnames';
import styles from './Repository.module.scss';
import { RepositoryProps } from './types';

const Repository = ({ repository, user }: RepositoryProps) => {
  const {
    name,
    language,
    created_at,
    updated_at,
    description,
    stargazers_count,
    forks_count,
    html_url,
    owner
  } = repository;

  return (
    <div className={styles.repository}>
      <div className={styles.flexWrapper}>
        <span className="highlighted-text">{name}</span>
        <span className={cx(styles.year, styles.greyText)}>
          {new Date(created_at).getFullYear()} -{' '}
          {new Date(updated_at).getFullYear()}
        </span>
      </div>
      {/* 
      Currently, the application only queries for repositories with type=owner.
      Thus, the following condition is true always.
      If the query type is changed to type=all, the condition can be collaborator.  
      */}
      <span className={cx(styles.greyText, styles.language)}>
        {language} - {owner.login === user.login ? 'OWNER' : 'COLLABORATOR'}
      </span>
      <p className={styles.description}>{description}</p>
      <p className={styles.information}>
        This repository has {stargazers_count} stars and {forks_count} forks. If
        you would like more information about this repository and my contributed
        code, please visit{' '}
        <a
          className={styles.githubLink}
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>{' '}
        on GitHub.
      </p>
      <hr />
    </div>
  );
};

export default Repository;
