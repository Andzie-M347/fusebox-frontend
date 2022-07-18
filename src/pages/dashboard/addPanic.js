import { AddPanicForm } from '@/components/forms/addPanicForm'
import { Container } from '@/components/ui/container'
import { Layout } from '@/layouts'
import React, { useEffect, useState } from 'react'
import { GrLocation } from 'react-icons/gr'

export const AddPanic = () => {
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setLat(position.coords.latitude.toString())
                setLng(position.coords.longitude.toString())
            },
            () => {},
        )
    }

    useEffect(() => {
        getLocation()
    }, [lat, lng])

    console.log(lat, lng)

    return (
        <Layout>
            <Container>
                <header className="page-header">
                    <h2> Add a new panic</h2>
                </header>

                <div className="page-header__location">
                    This Page require access to your location
                    <button className="badge" onClick={getLocation}>
                        <GrLocation />
                        <span>Allow location</span>
                    </button>
                </div>

                <AddPanicForm lat={lat} lng={lng} />
            </Container>
        </Layout>
    )
}
