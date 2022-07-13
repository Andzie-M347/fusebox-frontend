import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPanics } from '@/redux/actions/panicsAction'

export const Panics = () => {
    const [dispatchPanics, setDispatchPanics] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPanics())
    }, [dispatchPanics])

    return <div>Panics</div>
}
