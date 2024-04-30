import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './authThanks';





export interface UserState {
    user: { name: string, email: string },
	token: null,
	isLoggedIn: boolean,
	isRefreshing: boolean,
}


const initialState: UserState = {
    user: {name: "", email: ""},
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
            state.user.email = "";
            state.user.name = "";
            state.isLoggedIn = false;
            state.isRefreshing = false;
            state.token = null;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(logIn.fulfilled, (state, action: any) => {
                 state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            
            .addCase(register.fulfilled, (state, action: any) => {
                state.user.name = action.payload.name;
                state.user.email = action.payload.email;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })

            .addCase(logOut.fulfilled, (state, action: any) => {
                state.user = { name: "", email: "" };
			    state.token = null;
			    state.isLoggedIn = false;
            })

            .addCase(refreshUser.fulfilled, (state, action:any) => {
			state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.token = action.payload.token;
			state.isLoggedIn = true;
			state.isRefreshing = false;
		    })


			.addMatcher(
				isAnyOf(
					refreshUser.pending,
				), state => {
					state.isRefreshing = true;
            })
            
			.addMatcher(
				isAnyOf(
					logIn.rejected,
                    register.rejected,
                    refreshUser.rejected,
				), (state:any, action) => {
                    state.error = action.payload;
                    state.isRefreshing = false;
				});
	},
});

export const userReducer = userSlice.reducer;
export const { setUser, deleteUser } = userSlice.actions;