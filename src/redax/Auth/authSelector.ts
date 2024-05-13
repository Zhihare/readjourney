import { RootState } from "../store";

export const selectUser = (state: RootState) => state.user.user;

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export const selectIsRefreshing = (state: RootState) => state.user.isRefreshing;

export const selectLoginError = (state: RootState) => state.user.error;
