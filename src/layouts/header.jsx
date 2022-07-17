import { Container } from '@/components/ui/container'
import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import User from '@/assets/images/user.png'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useSelector } from 'react-redux'

export const Header = () => {
    const { loggedIn } = useSelector(state => state.auth)

    return (
        <header className="main-header">
            <nav className="navigation">
                <Container>
                    <div className="navigation__wrapper">
                        <Link
                            to={loggedIn ? '/dashboard' : '/'}
                            className="navigation__logo">
                            <Logo height="40" />
                        </Link>

                        <div className="navigation__profile">
                            <span>
                                <BiDotsVerticalRounded />
                            </span>
                            <img src={User} alt="Profile" />
                        </div>
                    </div>
                </Container>
            </nav>
        </header>
    )
}
