import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    panics: [],
    loading: false,
    error: null,
}

const panicsSlice = createSlice({
    name: 'panics',
    initialState,
    reducers: {
        setLoading: state => state.loading,
        setSuccess: (state, action) => {
            state.success = action.payload
            state.loading = false
        },
        setPanicFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

const { reducer, actions } = panicsSlice

export const { setPanicFailure, setLoading, setSuccess } = actions

export default reducer
