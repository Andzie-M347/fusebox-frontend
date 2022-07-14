import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPanics } from '@/redux/actions/panicsAction'
import { Container } from '../ui/container'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'

export const Panics = () => {
    const [dispatchPanics, setDispatchPanics] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPanics())
    }, [dispatchPanics])

    return (
        <Container>
            <section className="panics-section">
                <div className="panics-section__search">
                    <span>
                        <FiSearch />
                    </span>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for panics "
                    />
                </div>

                <div className="panics-section__chat">
                    <span>
                        <IoChatbubblesOutline />
                    </span>
                </div>
            </section>
        </Container>
    )
}
