import React, { Fragment } from 'react'
import { Header } from './header'

export const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />

            {children}
        </Fragment>
    )
}
