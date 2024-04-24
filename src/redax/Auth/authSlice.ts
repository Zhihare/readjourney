import { createSlice } from '@reduxjs/toolkit';





export interface UserState {
    user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isRefreshing: false,
}


const initialState: UserState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		setUser(state, action) {
            state.user.email = action.payload.email;
            state.user.name = action.payload.name;
            state.isLoggedIn = action.payload.isLoggedIn;
            state.isRefreshing = action.payload.isRefreshing;
            state.token = action.payload.token;
		},

        deleteUser(state) {
            state.user.email = null;
            state.user.name = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
            state.token = null;
        },
			},
});

export const userReducer = userSlice.reducer;
export const { setUser, deleteUser } = userSlice.actions;