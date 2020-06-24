import React, { useState } from 'react';
import styles from './ResumeGenerator.module.scss';

interface ResumeGeneratorProps {
  onSubmit: (param?: any) => void;
}

const ResumeGenerator = ({ onSubmit }: ResumeGeneratorProps) => {
  const [githubUsername, setGithubUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (githubUsername) {
      setErrorMessage('');
      onSubmit(githubUsername);
    } else {
      setErrorMessage('Please provide a username.');
    }
  };

  return (
    <div className={styles.resumeGenerator}>
      <h3>Github username</h3>
      <form aria-label="Input github username">
        <label className="hidden" htmlFor="username">
          Github username input
        </label>
        <input
          id="username"
          name="username"
          placeholder="John Doe"
          type="text"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setGithubUsername(e.currentTarget.value)
          }
          value={githubUsername}
          autoComplete="off"
          autoFocus
        />
        <button type="submit" onClick={handleSubmit}>
          Generate
        </button>
      </form>
      <span className="highlighted-text">{errorMessage}</span>
    </div>
  );
};

export default ResumeGenerator;
