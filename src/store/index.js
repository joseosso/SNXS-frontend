import {configureStore} from "@reduxjs/toolkit";
import {uiSlice} from "./ui";
import {scanSlice} from "./scan";

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        scan: scanSlice.reducer
    },
})