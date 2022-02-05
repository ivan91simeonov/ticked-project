import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import ticketService from './ticketService'

const initialState = {
    tickets: [],
    ticket: {},
    isError: false,
    isSuccess: false ,
    isLoading: false,
    message: ''
}

export const ticketSLice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        
    }
})

export const {reset} = ticketSLice.actions
export default ticketSLice.reducer