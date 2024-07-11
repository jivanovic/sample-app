import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@app/redux/auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
