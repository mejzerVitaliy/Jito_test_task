import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: { isConvertBtn: boolean } = {
    isConvertBtn: false
}

export const isConvertBtnSlice = createSlice({
    name: "ConvertBtn",
    initialState,
    reducers: {
        toggleIsConvertBtn: (state, action: PayloadAction<boolean>) => {
            state.isConvertBtn = action.payload
        }
    }
})

export const { toggleIsConvertBtn } = isConvertBtnSlice.actions
export default isConvertBtnSlice.reducer