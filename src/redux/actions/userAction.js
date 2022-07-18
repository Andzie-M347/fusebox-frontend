import axios from '@/lib/axios'
import {
    setUserFailure,
    // setLoading,
    setUserSuccess,
} from '@/redux/slices//userSlice'

export const fetchUser = () => async dispatch => {
    // dispatch(setLoading())

    try {
        /// Fetch from api
        const result = await axios.get('/api/user')

        dispatch(setUserSuccess(result.data))
    } catch (error) {
        dispatch(setUserFailure(error.message))
    }
}
