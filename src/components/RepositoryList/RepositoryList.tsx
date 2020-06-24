import React from 'react';
import { UserRepo } from '../../store/user/types';
import styles from './RepositoryList.module.scss';
import { RepositoryListProps } from './types';
import Repository from './Repository/Repository';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/userSlice';

const RepositoryList = ({ repositories }: RepositoryListProps) => {
  const user = useSelector(selectUser);

  return (
    <div className={styles.repositoryList}>
      {repositories.map((repo: UserRepo) => (
        <Repository user={user} key={repo.id} repository={repo} />
      ))}
    </div>
  );
};

export default RepositoryList;
