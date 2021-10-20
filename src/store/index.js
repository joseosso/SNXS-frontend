import {configureStore} from "@reduxjs/toolkit";
import {uiSlice} from "./ui";
import {scanSlice} from "./scanner";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        scanner: scanSlice.reducer
    },
})