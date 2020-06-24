import React from 'react';
import { UserDetails as UserDetailsType } from '../../store/user/types';
import styles from './UserDetails.module.scss';

interface UserDetailsProps {
  userDetails: UserDetailsType;
}

const UserDetails = ({ userDetails }: UserDetailsProps) => {
  const { login, html_url, public_repos, followers } = userDetails;

  // location can be null. Thus a conditional check
  const [city, country] = userDetails.location
    ? userDetails.location.split(',')
    : '';
  const year = new Date(userDetails.created_at).getFullYear();

  return (
    <div className={styles.userDetails}>
      <h2>{login}</h2>
      <h2 className={styles.subtitle}>A passionate Github user</h2>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        {html_url}
      </a>
      <p>
        On GitHub since {year}, {login} is a developer based in {city},{country}{' '}
        with{' '}
        <span className="highlighted-text">
          {public_repos} public repositories{' '}
        </span>
        and <span className="highlighted-text">{followers} followers</span>.
      </p>
    </div>
  );
};

export default UserDetails;
