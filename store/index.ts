import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import jobsReducer from './jobs-slice/jobs-slice';

const combinedReducers = combineReducers({
  'jobs': jobsReducer,
});


const reducer: typeof combinedReducers = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducers(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore);
