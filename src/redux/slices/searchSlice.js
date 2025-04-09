import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchActive: false,
    searchQuery: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        toggleSearch: (state) => {
            state.searchActive = !state.searchActive;
        },
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { toggleSearch, updateSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;