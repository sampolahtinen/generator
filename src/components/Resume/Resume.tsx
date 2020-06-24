import React from 'react';
import { UserDetails, UserRepo, UserLanguages } from '../../store/user/types';
import styles from './Resume.module.scss';
import LanguageList from '../LanguageList';
import RepositoryList from '../RepositoryList';
import UserDetailsComponent from '../UserDetails';

interface ResumeProps {
  userDetails: UserDetails;
  userRepos: UserRepo[];
  userLanguages: UserLanguages;
}

const Resume = ({ userDetails, userRepos, userLanguages }: ResumeProps) => {
  return (
    <div className={styles.resume}>
      <div className={styles.content}>
        <section>
          <UserDetailsComponent userDetails={userDetails} />
        </section>
        <section>
          <h3>Languages</h3>
          <LanguageList languages={userLanguages} />
        </section>
        <section>
          <h3>Popular Repositories</h3>
          <RepositoryList repositories={userRepos} />
        </section>
      </div>
    </div>
  );
};

export default Resume;
