import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getOwnBooks, getRecommendBooks } from './booksThanks';





export interface BooksState {
	books: any[];
	myBooks: any[];
  	isLoading: boolean;
  	error: string | null;
	loadpage: number;
	maxPage: number;
    modal: boolean;
    modalData: any
}


const initialState: BooksState = {
	books: [],
	myBooks: [],
	isLoading: false,
	error: null,
	loadpage: 1,
	maxPage: 1,
	modal: false,
	modalData: null,


};

const booksSlice = createSlice({
	name: 'books',
	initialState,

	reducers: {
		setBooks(state, action) {
			state.books = action.payload;
		},

		setMyBooks(state, action) {
            state.myBooks = action.payload;
        },

		
		setLoadpage(state, action) {
			state.loadpage = action.payload;
		},

		setMaxPage(state, action) {
			state.maxPage = action.payload;
		},


		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},


		setModal(state, action) {
			state.modal = action.payload;
		},

		setModalData(state, action) {
			state.modalData = action.payload;
		},
	},

	extraReducers: builder => {
		builder
			.addCase(getRecommendBooks.fulfilled, (state, action: any) => {
				state.isLoading = false;
				state.error = null;
				state.books = [];
				state.books = action.payload.results;
				state.maxPage = action.payload.totalPages;
			})

			.addCase(getOwnBooks.fulfilled, (state, action: any) => {
				state.isLoading = false;
				state.error = null;
				state.myBooks = action.payload;
			})

			.addMatcher(
				isAnyOf(
					getRecommendBooks.pending,
					getOwnBooks.pending,
				), state => {
					state.isLoading = false;
				})
			.addMatcher(
				isAnyOf(
					getRecommendBooks.rejected,
					getOwnBooks.pending,
				), (state: any, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	},
})


export const booksReducer = booksSlice.reducer;
export const { setIsLoading, setModal, setModalData, setLoadpage, setBooks, setMyBooks } = booksSlice.actions;