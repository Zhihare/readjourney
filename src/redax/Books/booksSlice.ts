import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getBookInform, getOwnBooks, getRecommendBooks, startReading, stopReading } from './booksThanks';





export interface BooksState {
	books: any[];
	myBooks: any[];
	bookInfo: any;
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
	bookInfo: [],
  
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

			.addCase(getBookInform.fulfilled, (state, action: any) => {
				state.isLoading = false;
				state.error = null;
				state.bookInfo = action.payload;
			})


			.addCase(startReading.fulfilled, (state, action: any) => {
				state.isLoading = false;
				state.error = null;
				state.bookInfo = action.payload;
			})

				.addCase(stopReading.fulfilled, (state, action: any) => {
				state.isLoading = false;
				state.error = null;
				state.bookInfo = action.payload;
			})


			.addMatcher(
				isAnyOf(
					getRecommendBooks.pending,
					getOwnBooks.pending,
					getBookInform.pending,
					startReading.pending,
                    stopReading.pending,
				), state => {
					state.isLoading = false;
				})
			.addMatcher(
				isAnyOf(
					getRecommendBooks.rejected,
					getOwnBooks.rejected,
					getBookInform.rejected,
					startReading.rejected,
                    stopReading.rejected,
				), (state: any, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	},
})


export const booksReducer = booksSlice.reducer;
export const { setIsLoading, setModal, setModalData, setLoadpage, setBooks, setMyBooks } = booksSlice.actions;