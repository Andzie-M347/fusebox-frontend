import React from 'react'
import { IoWarningOutline } from 'react-icons/io5'

const styles = {
    wrapper: {
        backgroundColor: '#ff0000',
        color: '#fff',
        padding: '1.4rem',
        marginBottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.5s ease-in-out',
    },

    icon: {
        marginRight: '.5rem',
    },
}

export const ErrorMessage = ({ error }) => {
    return (
        <div style={styles.wrapper}>
            <span>
                <IoWarningOutline style={styles.icon} />
                {error}
            </span>
        </div>
    )
}
