import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authPending: state => {
            state.loading = true
        },

        authSuccess: state => {
            state.loading = false
            state.loggedIn = true
            state.error = ''
        },
        authFail: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
    },
})

const { reducer, actions } = authSlice

export const { authPending, authSuccess, authFail } = actions

export default reducer
