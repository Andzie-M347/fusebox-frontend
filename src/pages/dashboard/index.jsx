import { useState, useEffect } from 'react'

import { Layout } from '@/layouts'
import { Welcome } from '@/components/ui/welcome'
import { Panics } from '@/components/panics'
import { useDispatch, useSelector } from 'react-redux'
import axios from '@/lib/axios'
import { setSuccess } from '@/redux/slices/userSlice'

export const Dashboard = () => {
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [status, setStatus] = useState(null)

    const dispatch = useDispatch()

    const { user } = useSelector(state => state.user)

    useEffect(() => {
        const getUser = async () => {
            await axios
                .get('/api/user')
                .then(response => {
                    // console.log(response.data)
                })
                .catch(error => console.log(error))
        }

        getUser()
    }, [])

    // useEffect(() => {
    //     const getLocation = () => {
    //         if (!navigator.geolocation) {
    //             setStatus('Geolocation is not supported by your browser')
    //         } else {
    //             setStatus('Locating...')
    //             navigator.geolocation.getCurrentPosition(
    //                 position => {
    //                     setStatus(null)
    //                     setLat(position.coords.latitude)
    //                     setLng(position.coords.longitude)
    //                 },
    //                 () => {
    //                     setStatus('Unable to retrieve your location')
    //                 },
    //             )
    //         }
    //     }

    //     getLocation()
    // }, [lat, lng])

    return (
        <Layout>
            <Welcome />

            <Panics />
        </Layout>
    )
}
