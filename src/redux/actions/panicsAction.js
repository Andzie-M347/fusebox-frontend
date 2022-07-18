import axios from '@/lib/axios'
import {
    setPanicFailure,
    // setLoading,
    setSuccess,
} from '@/redux/slices/panicsSlice'

export const getPanics = () => async dispatch => {
    // dispatch(setLoading())

    try {
        /// Fetch from api
        const result = await axios.get('/api/panics', {
            headers: {
                Authorization: 'Bearer ',
            },
        })

        const { panics } = result.data.data

        dispatch(setSuccess(panics))
    } catch (error) {
        dispatch(setPanicFailure(error.message))
    }
}
