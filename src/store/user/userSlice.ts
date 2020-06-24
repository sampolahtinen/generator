import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDetails, UserRepo, UserState, UserLanguages } from './types';
import { AppThunk, RootState } from '../store';
import { getUserRepos, getUserDetails } from '../../api/githubUser';
import {
  calculateLanguages,
  sortBy,
  fetchMoreRepos
} from '../../utils/helpers';

export const initialState: UserState = {
  details: {} as UserDetails,
  repos: [] as UserRepo[],
  languages: {} as UserLanguages,
  loading: undefined,
  error: undefined
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserRequest: (state: UserState, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = undefined;
    },
    getUserSuccess: (state: UserState) => {
      state.loading = false;
    },
    getUserFailure: (state: UserState, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setUserLanguages: (state: UserState, action: PayloadAction<any>) => {
      state.languages = action.payload;
    },
    getUserReposSuccess: (state: UserState, action: PayloadAction<any>) => {
      state.repos = action.payload;
    },
    getUserDetailsSuccess: (
      state: UserState,
      action: PayloadAction<UserDetails>
    ) => {
      state.details = action.payload;
    }
  }
});

export const fetchUser = (username: string): AppThunk => async dispatch => {
  try {
    dispatch(getUserRequest(username));

    const { data: userDetails } = await getUserDetails(username);
    const { data: userRepos, headers } = await getUserRepos(username, 1);

    // If headers contain a link, the response is paginated
    if (headers.link) {
      const paginatedRepos = await fetchMoreRepos(username, headers.link);
      userRepos.push(...paginatedRepos);
    }

    const userLangs = calculateLanguages(userRepos);
    const topThreeRepos = userRepos
      .sort(sortBy('stargazers_count'))
      .slice(0, 3);

    dispatch(setUserLanguages(userLangs));
    dispatch(getUserReposSuccess(topThreeRepos));
    dispatch(getUserDetailsSuccess(userDetails));
  } catch (err) {
    dispatch(getUserFailure(err));
  } finally {
    dispatch(getUserSuccess());
  }
};

export const {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  setUserLanguages,
  getUserDetailsSuccess,
  getUserReposSuccess
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.details;

export default userSlice.reducer;
