import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchBorsch = createAsyncThunk(
    'borsch/fetchBorschStatus',
    async ({
        category, order, searchValue, sortBy, currentPage,
    }) => {
        const response = await axios.get(
            `https://64479bb450c2533744296f40.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searchValue}`,
        )
        return response.data
    },
)

const initialState = {
    items: [],
    status: 'loading', // loading | success | error
}

export const borschSlice = createSlice({
    name: 'borsch',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
    },
    extraReducers: {
        [fetchBorsch.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchBorsch.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchBorsch.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        },
    },
})

export const {
    setItems,
} = borschSlice.actions

export default borschSlice.reducer
