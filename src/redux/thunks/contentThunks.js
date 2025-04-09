import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../const';

export const fetchContentPage = createAsyncThunk(
    'content/fetchPage',
    async (pageNumber, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BASE_URL}/data/page${pageNumber}.json`);
            if (!response.ok) {
                return rejectWithValue(`Error: ${response.status}`);
            }
            const data = await response.json();
            if (data && data.page && data.page['content-items'] &&
                data.page['content-items'].content) {
                return data.page;
            }
            return [];
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);