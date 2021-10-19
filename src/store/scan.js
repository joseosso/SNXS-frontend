import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui";

const initialState = {
    scanResult: null,
    scanHasError: false
}

export const scanSlice = createSlice({
    name: 'scan',
    initialState: initialState,
    reducers: {
        setScanResult(state, action) {
            state.scanResult = action.payload;
        },
        setScanHasError(state, action) {
            state.scanHasError = action.payload;
        }
    }
});

export const scanActions = scanSlice.actions;

export const startScan = (payload, clearFields) => {
    return (dispatch) => {
        dispatch(scanActions.setScanHasError(false));
        dispatch(uiActions.setUrlFormIsLoading(true));
        // axios post request...
    }
}