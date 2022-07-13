import { Container } from '@/components/ui/container'
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="main-header">
            <nav className="navigation">
                <Container>
                    <div className="navigation__wrapper">
                        <Link to="/" className="navigation__logo">
                            logo
                        </Link>

                        <div className="navigation__profile">Profile</div>
                    </div>
                </Container>
            </nav>
        </header>
    )
}
