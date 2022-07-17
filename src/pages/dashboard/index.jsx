import { useState, useEffect } from 'react'

import { Layout } from '@/layouts'
import { Welcome } from '@/components/ui/welcome'
import { Panics } from '@/components/panics'

export const Dashboard = () => {
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [status, setStatus] = useState(null)

    useEffect(() => {
        const getLocation = () => {
            if (!navigator.geolocation) {
                setStatus('Geolocation is not supported by your browser')
            } else {
                setStatus('Locating...')
                navigator.geolocation.getCurrentPosition(
                    position => {
                        setStatus(null)
                        setLat(position.coords.latitude)
                        setLng(position.coords.longitude)
                    },
                    () => {
                        setStatus('Unable to retrieve your location')
                    },
                )
            }
        }

        getLocation()
    }, [lat, lng])

    return (
        <Layout>
            <Welcome />

            <p> {status}</p>
            <Panics />
        </Layout>
    )
}
