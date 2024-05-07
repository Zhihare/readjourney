import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getRecommendBooks } from './booksThanks';





export interface BooksState {
    books: any[];
  	isLoading: boolean;
  	error: string | null;
	loadpage: number;
	maxPage: number;
    modal: boolean;
    modalData: any
}


const initialState: BooksState = {
    books: [],
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
				state.books.push(action.payload.results);
				state.maxPage = action.payload.totalPages;
				// state.loadpage = action.payload.page;
			})
			// .addCase(getFilterTeachers.fulfilled, (state, action: any) => {
			// 	state.isLoading = false;
			// 	state.error = null;
			// 	state.filter = state.filter.concat(action.payload[0]);
			// 	state.maxPage = action.payload[1];
			// })

			.addMatcher(
				isAnyOf(
					getRecommendBooks.pending,
					// getFilterTeachers.pending,
				), state => {
					state.isLoading = false;
				})
			.addMatcher(
				isAnyOf(
					getRecommendBooks.rejected,
					// getFilterTeachers.rejected,
				), (state: any, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	},
})


export const booksReducer = booksSlice.reducer;
export const { setIsLoading, setModal, setModalData, setLoadpage, setBooks } = booksSlice.actions;