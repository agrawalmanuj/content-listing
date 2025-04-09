import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './slices/contentSlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
    reducer: {
        content: contentReducer,
        search: searchReducer,
    },
});

export default store;