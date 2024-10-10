import { configureStore } from "@reduxjs/toolkit";
import { HtmlInputSlice } from "../slices/HtmlInputSlice";
import { isConvertBtnSlice } from "../slices/isConvertBtnSlice";

export const store = configureStore({
    reducer: {
        HTML: HtmlInputSlice.reducer,
        ConvertBtn: isConvertBtnSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;