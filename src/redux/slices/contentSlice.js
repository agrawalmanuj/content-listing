import { createSlice } from '@reduxjs/toolkit';
import { fetchContentPage } from '../thunks/contentThunks';

const initialState = {
    items: [],
    currentPage: 1,
    loading: true,
    hasMore: true,
    error: null,
    title: '',
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContentPage.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchContentPage.fulfilled, (state, action) => {
                if (action?.payload?.['content-items']?.content?.length
                ) {
                    state.items = [...state.items, ...action.payload['content-items'].content];
                    state.title = action.payload.title ?? "";
                    state.currentPage += 1;
                }
                if (action.payload) {
                    const {
                        'page-num-requested': pageNumRequested,
                        'page-size-requested': pageSizeRequested,
                        'total-content-items': totalContentItems,
                    } = action.payload;
                    state.hasMore = pageNumRequested * pageSizeRequested < totalContentItems;
                }
                else {
                    state.hasMore = false;
                }
                state.loading = false;
            })
            .addCase(fetchContentPage.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
                // If we get a 404, it means we've reached the end
                if (action.payload === 'Error: 404') {
                    state.hasMore = false;
                }
            });
    },
});

export default contentSlice.reducer;