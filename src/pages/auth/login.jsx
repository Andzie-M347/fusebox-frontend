import React, { useState } from 'react'

import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa'
import Image from '@/assets/images/illustration.png'
import { useDispatch, useSelector } from 'react-redux'
import { authPending, authSuccess, authFail } from '@/redux/slices/authSlice'
import { Spinner } from '@/components/ui/spinner'
import axios from '@/lib/axios'
import { ErrorMessage } from '@/components/ui/errorMessage'

export const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()
    const { loading, loggedIn, error } = useSelector(state => state.auth)

    const handleChange = e => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()

        dispatch(authPending())

        await axios.get('/sanctum/csrf-cookie').then(() => {
            axios
                .post('/api/login', {
                    email: state.email,
                    password: state.password,
                })
                .then(response => {
                    if (response.data.status === 'success') {
                        dispatch(authSuccess())

                        console.log(response.data)
                    } else {
                        dispatch(authFail(response.data.message))
                    }
                })
                .catch(err => console.log(err))
        })
    }

    return (
        <section className="login-screen">
            <div className="login-screen__left">
                <img src={Image} alt="Login" />
            </div>

            <div className="login-screen__right">
                {error && <ErrorMessage error={error} />}
                <header className="login-screen__left--header">
                    <h2> Welcome Back!</h2>
                    <p>Login to your account</p>
                </header>
                <form action="">
                    <div className="form-group">
                        <label htmlFor=""> Email </label>
                        <input
                            type="text"
                            name="email"
                            placeholder="example@gmail.com"
                            className="form-control"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group  password">
                        <label htmlFor="password"> Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="8+ characters"
                            className="form-control"
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="button button__primary">
                            {loading ? <Spinner /> : 'Log in'}
                        </button>
                    </div>
                </form>

                <footer className="login-screen__footer">
                    Or login using icons
                    <span className="footer-screen__footer--icon">
                        <FaFacebookF />
                    </span>
                    <span className="footer-screen__footer--icon">
                        <FaTwitter />
                    </span>
                    <span className="footer-screen__footer--icon">
                        <FaPinterest />
                    </span>
                </footer>
            </div>
        </section>
    )
}
