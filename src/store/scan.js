import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui";
import axios from "../axios/axios";

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
        axios.post("", payload).then(response => {
            console.log(response.data);
            dispatch(uiActions.setUrlFormIsLoading(false));
        }).catch(error => {
            console.log(error);
            dispatch(scanActions.setScanHasError(true));
            dispatch(uiActions.setUrlFormIsLoading(false));
        })
    }
}