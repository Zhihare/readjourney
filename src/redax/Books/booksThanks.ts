import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://readjourney.b.goit.study/api/';

export const getRecommendBooks = createAsyncThunk(
  'books/recommended',
  async ({ author, page, limit, title }: { author?: string; page?: number; limit?: number; title?: string } = {}, thunkAPI) => {
    try {
      const response = await axios.get('/books/recommend', {
        params: {
          author,
          page,
          limit,
          title
        }
	  });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getOwnBooks = createAsyncThunk(
  'books/ownBooks',
	async ({ status }: {status?: string} , thunkAPI) => {
    try {
		const response = await axios.get('/books/own', {
			params: {
				status
			}
		});
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addRecommendedBook = createAsyncThunk(
	"books/addRecommended",
	async (bookId:string, thunkAPI) => {
		try {
			const response = await axios.post(`/books/add/${bookId}`);
			return response.data;
		} catch (e:any) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
)

export const getRecommendB = createAsyncThunk(
	"books/get",
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
