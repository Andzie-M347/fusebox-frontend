import { configureStore } from '@reduxjs/toolkit'
import panicsSlice from './slices/panicsSlice'
import authSlice from './slices/authSlice'
import userSlice from './slices/userSlice'

const store = configureStore({
    reducer: {
        panics: panicsSlice,
        auth: authSlice,
        user: userSlice,
    },
})

export default store
