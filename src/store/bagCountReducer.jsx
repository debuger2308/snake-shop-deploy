import { createSlice } from "@reduxjs/toolkit";

const lcBagCounter = JSON.parse(localStorage.getItem('bagItems'))

const counterSlice = createSlice({
    name: 'BagCount',
    initialState:{
        bagCount: lcBagCounter ? lcBagCounter.length : 0
    },
    reducers: {
        changeCount(state, action){
            state.bagCount = action.payload?.length
        }
    }
})

export const {changeCount} = counterSlice.actions
export default counterSlice.reducer