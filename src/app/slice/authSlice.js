import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAtuhenticated: localStorage.getItem('isAuth'),
  email: localStorage.getItem('email'),
};
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAtuhenticated = true;
      localStorage.setItem('isAuth', JSON.stringify(state.isAtuhenticated));
    },
    logout(state) {
      state.isAtuhenticated = false;
      localStorage.removeItem('isAuth');
      localStorage.removeItem('email');
    },
    getEmail(state, action) {
      state.email = action.payload;
      localStorage.setItem('email', JSON.stringify(state.email));
    },
  },
});
export { authSlice };
export const authAction = authSlice.actions;
