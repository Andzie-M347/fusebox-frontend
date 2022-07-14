import React from 'react'
import { Container } from './container'

export const Welcome = () => {
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
                    <button className="button button__primary">
                        New Panic
                    </button>
                </div>
            </section>
        </Container>
    )
}
