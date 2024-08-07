export const selectUser = state => state.auth.user;

export const selectToken = state => state.auth.token;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectAuthLoading = state => state.auth.loading;

export const selectAuthError = state => state.auth.error;

export const selectIsRefreshing = state => state.auth.isRefreshing;
