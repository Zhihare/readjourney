import { RootState } from '../store';


export const selectBooks = (state: RootState) => state.books.books;
// export const selectFavorites = (state: RootState) => state.teachers.favorites;

// export const selectFilter = (state: RootState) => state.teachers.filter;

// export const selectModal = (state: RootState) => state.teachers.modal;
// export const selectModalData = (state: RootState) => state.teachers.modalData;

export const selectLoading = (state: RootState) => state.books.isLoading;
export const selectLoadPage = (state: RootState) => state.books.loadpage;
export const selectMaxPage = (state: RootState) => state.books.maxPage;