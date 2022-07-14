import React from 'react'
import { Container } from './container'

export const Welcome = () => {
    return (
        <Container>
            <section className="welcome">
                <div className="welcome__header">
                    <h3 className="">
                        <span> Good Morning,</span>
                        <span> Andzie Mabaso</span>
                    </h3>

                    <p> Welcome to ArvanNex Panic system</p>
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
