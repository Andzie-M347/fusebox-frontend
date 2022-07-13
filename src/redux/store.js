import { configureStore } from '@reduxjs/toolkit'
import panicsSlice from './slices/panicsSlice'

const store = configureStore({
    reducer: {
        panics: panicsSlice,
    },
})

export default store
