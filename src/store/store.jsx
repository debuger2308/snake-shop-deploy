import { configureStore } from "@reduxjs/toolkit";
import bagCountReducer from "./bagCountReducer";

export default configureStore({
    reducer:{
        bagCount: bagCountReducer
    }
})