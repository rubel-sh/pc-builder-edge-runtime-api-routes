import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CPU: null,
    MOTHERBOARD: null,
    RAM: null,
    STORAGE: null,
    POWER_SUPPLY_UNIT: null,
    MONITOR: null,
};
export const pcBuilderSlice = createSlice({
    name: "pcBuilder",
    initialState,
    reducers: {
        // example of updating the state
        // dispatch(updateComponent({ component: "CPU", data: { name: "Intel Core i5 10400F" } }));
        updateComponent: (state, action) => {
            state[action.payload.component] = action.payload.data;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateComponent } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
