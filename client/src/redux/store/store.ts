import { configureStore } from '@reduxjs/toolkit';

import tasks from '../slices/tasksSlice';

const store = configureStore({
  reducer: { tasks },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
