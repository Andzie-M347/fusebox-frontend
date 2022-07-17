import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPanics } from '@/redux/actions/panicsAction'
import { Container } from '../ui/container'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { PanicBox } from './panicBox'
import { formatDate } from '@/utils'
export const Panics = () => {
    const dispatch = useDispatch()
    const { panics, loading } = useSelector(state => state.panics)

    console.log('from panic', panics)

    // console.log(new Date())

    useEffect(() => {
        dispatch(getPanics())
    }, [])

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

                <div className="panics-section__content">
                    <div className="row">
                        {panics.map(panic => (
                            <PanicBox
                                key={panic.id}
                                id={panic?.id}
                                details={panic?.details}
                                // date={formatDate(panic.created_at)}
                                panic_type={panic?.panic_type}
                                user={panic?.created_by.name}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    )
}
