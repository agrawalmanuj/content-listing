import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchActive: false,
    searchQuery: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        resetSearchState: (state) => {
            state.searchActive = false;
            state.searchQuery = '';
        },
        toggleSearch: (state) => {
            state.searchActive = !state.searchActive;
        },
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { toggleSearch, updateSearchQuery, resetSearchState } = searchSlice.actions;
export default searchSlice.reducer;