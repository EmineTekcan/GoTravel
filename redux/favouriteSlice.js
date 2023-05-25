import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice=createSlice({
    name:"favourites",
    initialState:{
        favourites:[]
    },
    reducers:{
        addFavourite: (state, action) =>{
            state.favourites.push(action.payload)
        }
    }
})

export default favouriteSlice.reducer

export const {addFavourite} =favouriteSlice.actions