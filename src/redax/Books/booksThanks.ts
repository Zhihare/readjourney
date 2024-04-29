import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api/';

export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("/contacts");
			return response.data;
		} catch (e:any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contactId:any, thunkAPI) => {
		try {
			const response = await axios.post("/contacts", { ...contactId });
			return response.data;
		} catch (e:any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			return response.data;
		} catch (e:any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const updateContact = createAsyncThunk(
	"contacts/updateContact",
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.patch(`/contacts/${contactId}`);
			return response.data;
		} catch (e:any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);
