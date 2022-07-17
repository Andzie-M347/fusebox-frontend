import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loading: false,
    error: null,
}

const panicsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoading: state => state.loading,
        setUserSuccess: (state, { payload }) => {
            state.user = payload
            state.loading = false
        },
        setUserFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

const { reducer, actions } = panicsSlice

export const { setUserFailure, setUserLoading, setUserSuccess } = actions

export default reducer
