import { configureStore } from "@reduxjs/toolkit";
import { HtmlInputSlice } from "../slices/HtmlInputSlice";

export const store = configureStore({
    reducer: {
        HTML: HtmlInputSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;