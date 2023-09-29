import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/redux/features/counterSlice";
import pcBuilderReducer from "@/redux/features/pcBuilderSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        pcBuilder: pcBuilderReducer,
    },
});
