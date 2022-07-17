import React from 'react'
import { Container } from './container'
import { useNavigate } from 'react-router-dom'

export const Welcome = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <section className="welcome">
                <div className="welcome__header">
                    <h3 className="title">
                        <span className="title__main"> Good Morning,</span>
                        <span className="title__sub"> {'username'}</span>
                    </h3>

                    <p> Welcome to Donotpanic system</p>
                </div>

                <div className="welcome__action">
                    <button
                        className="button button__primary"
                        onClick={() => navigate('/add-panic')}>
                        New Panic
                    </button>
                </div>
            </section>
        </Container>
    )
}
