import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activeTriangleReducer from '../features/ActiveTriangle/ActiveTriangleSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    activeTriangle: activeTriangleReducer

  },
  devTools: false
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
