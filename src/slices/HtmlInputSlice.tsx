import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypeOfHtmlValue{
    html: string
}

const initialState: TypeOfHtmlValue = {
    html: ''
}

export const HtmlInputSlice = createSlice({
    name: "HTML",
    initialState,
    reducers: {
        setHtml: (state, action: PayloadAction<string>) => {
            state.html = action.payload
        } 
    }
})

export const { setHtml } = HtmlInputSlice.actions;
export default HtmlInputSlice.reducer