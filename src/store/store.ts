import { UserState } from './user/types';
import userReducer from './user/userSlice';
import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action
} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  user: userReducer
});

export interface ReduxState {
  user: UserState;
}

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
