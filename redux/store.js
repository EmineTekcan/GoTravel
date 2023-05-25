import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from './favouriteSlice'

export const store=configureStore({
    reducer:{
        favouriteSlice:favouriteSlice
    }
})