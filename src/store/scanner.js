import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui";
import axios from "../axios/axios";

const initialState = {
    scanResult: null,
    scanHasError: false
}

export const scanSlice = createSlice({
    name: 'scanner',
    initialState: initialState,
    reducers: {
        setScanResult(state, action) {
            state.scanResult = action.payload;
            console.log(action.payload)
        },
        setScanHasError(state, action) {
            state.scanHasError = action.payload;
        }
    }
});

export const scanActions = scanSlice.actions;

export const startScan = (payload, callback) => {
    return (dispatch) => {
        dispatch(scanActions.setScanHasError(false));
        dispatch(scanActions.setScanResult(null));
        dispatch(uiActions.setUrlFormIsLoading(true));
        axios.post("", payload).then(response => {
            dispatch(uiActions.setUrlFormIsLoading(false));
            dispatch(scanActions.setScanResult(response.data));
            callback(false);
        }).catch(error => {
            console.log(error);
            dispatch(scanActions.setScanHasError(true));
            dispatch(scanActions.setScanResult(null));
            dispatch(uiActions.setUrlFormIsLoading(false));
            callback(true);
        })
    }
}