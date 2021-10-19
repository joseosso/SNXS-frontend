import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    urlFormIsLoading: false
};

export const uiSlice = createSlice({
    initialState: initialState,
    name: 'ui',
    reducers: {
        setUrlFormIsLoading(state, action) {
            state.urlFormIsLoading = action.payload;
        }
    }
});

export const uiActions = uiSlice.actions;