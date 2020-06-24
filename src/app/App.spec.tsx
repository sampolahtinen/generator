import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer, ReduxState } from '../store/store';
import { mockUserRepos } from '../__mocks__/mockUserRepos';
import { mockUserLanguages } from '../__mocks__/mockUserLanguages';
import { mockUserDetails } from '../__mocks__/mockUserDetails';

let mockState: ReduxState = {
  user: {
    details: mockUserDetails,
    repos: mockUserRepos,
    languages: mockUserLanguages,
    loading: undefined,
    error: undefined
  }
};

describe('Main App Component', () => {
  const mockStore = createStore(rootReducer, mockState);
  const wrapper = mount(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Main App Component', () => {
  mockState = {
    user: {
      details: mockUserDetails,
      repos: mockUserRepos,
      languages: mockUserLanguages,
      loading: true,
      error: undefined
    }
  };
  const mockStore = createStore(rootReducer, mockState);

  const wrapper = mount(
    <Provider store={mockStore}>
      <App />
    </Provider>
  );
  it('displays loading when resume generation is in process', () => {
    expect(wrapper.find('.loading').exists()).toBeTruthy();
  });
});
