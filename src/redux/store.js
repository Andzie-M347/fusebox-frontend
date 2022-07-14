import { configureStore } from '@reduxjs/toolkit'
import panicsSlice from './slices/panicsSlice'
import authSlice from './slices/authSlice'

const store = configureStore({
    reducer: {
        panics: panicsSlice,
        auth: authSlice,
    },
})

export default store
