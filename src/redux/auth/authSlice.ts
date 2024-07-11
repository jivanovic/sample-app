import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthFlags {
  isAuthenticated: boolean;
}

const initialState: AuthFlags = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = Boolean(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase('RESET', () => {
      return { ...initialState };
    });
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
