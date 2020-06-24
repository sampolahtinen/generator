import React, { useCallback } from 'react';
import isEmpty from 'lodash.isempty';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import { ReduxState } from '../store/store';
import ResumeGenerator from '../components/ResumeGenerator';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Resume from '../components/Resume';
import { fetchUser } from '../store/user/userSlice';

function App() {
  const {
    details,
    repos,
    languages,
    loading: isGenerating,
    error
  } = useSelector((state: ReduxState) => state.user);

  const dispatch = useDispatch();

  const dispatchFetchUser = useCallback(
    (username: string) => dispatch(fetchUser(username)),
    [dispatch]
  );

  const renderContent = () => {
    if (error) return <ErrorMessage message={error.message} />;
    if (isGenerating) return <Loading>Generating Resume...</Loading>;
    if (!isEmpty(details)) {
      return (
        <Resume
          userDetails={details}
          userRepos={repos}
          userLanguages={languages}
        />
      );
    }
  };

  return (
    <Layout>
      <h1>My Github Resumé</h1>
      <ResumeGenerator onSubmit={dispatchFetchUser} />
      {renderContent()}
    </Layout>
  );
}

export default App;
