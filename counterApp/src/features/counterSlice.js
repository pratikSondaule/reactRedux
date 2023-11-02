// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initialValue: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.initialValue += 5;

        },
        decrement: (state) => {
            state.initialValue -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
