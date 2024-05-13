import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api/';

// Utility to add JWT//
const setAuthHeader = (token:string) => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};


/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const registration = createAsyncThunk(
	'auth/register',
	async (credentials: { name: string; email: string; password: string }, thunkAPI) => {
		try {
			const res = await axios.post('/users/signup', credentials);
			// After successful registration, add the token to the HTTP header
			setAuthHeader(res.data.token);
			return res.data;
		} catch (error:any) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, thunkAPI) => {
    try {
      const res = await axios.post('/users/signin', credentials);
		setAuthHeader(res.data.token);
      return res.data;
    } catch (error:any) {
     return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await axios.post('/users/signout');
		// After a successful logout, remove the token from the HTTP header
		clearAuthHeader();
	} catch (error:any) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (_, thunkAPI:any) => {
		// Reading the token from the state via getState()
		const state = thunkAPI.getState();
		const persistedToken = state.user.token;
		if (persistedToken === null) {
			// If there is no token, exit without performing any request
			return thunkAPI.rejectWithValue('Unable to fetch user');
		}

		try {
			// If there is a token, add it to the HTTP header and perform the request
			setAuthHeader(persistedToken);
			const res = await axios.get('/users/current');
			return res.data;

		} catch (error: any) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);