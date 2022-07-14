import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPanics } from '@/redux/actions/panicsAction'
import { Container } from '../ui/container'

export const Panics = () => {
    const [dispatchPanics, setDispatchPanics] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPanics())
    }, [dispatchPanics])

    return (
        <Container>
            <small> Search </small>
        </Container>
    )
}
