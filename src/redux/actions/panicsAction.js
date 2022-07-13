import {
    setPanicFailure,
    setLoading,
    setSuccess,
} from '@/redux/slices/panicsSlice'
import axios from 'axios'

export const getPanics = () => async dispatch => {
    dispatch(setLoading)

    try {
        /// Fetch from api
        const result = await axios.get('http://', {
            headers: {
                Authorization: 'Bearer ',
            },
        })

        console.log(result)
    } catch (error) {
        dispatch(setPanicFailure(error))
    }
}
