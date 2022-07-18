import React from 'react'

import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa'
import Image from '@/assets/images/illustration.png'
import { useDispatch, useSelector } from 'react-redux'
import { authPending, authSuccess, authFail } from '@/redux/slices/authSlice'
import { Spinner } from '@/components/ui/spinner'
import axios from '@/lib/axios'
import { ErrorMessage } from '@/components/ui/errorMessage'
import { useForm } from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()

    const { onInputChange, values } = useForm()

    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.auth)

    const handleSubmit = async e => {
        e.preventDefault()

        dispatch(authPending())

        await axios.get('/sanctum/csrf-cookie').then(() => {
            axios
                .post('/api/login', {
                    email: values.email,
                    password: values.password,
                })
                .then(response => {
                    if (response.data.status === 'success') {
                        dispatch(authSuccess())

                        navigate('/dashboard')
                    } else {
                        dispatch(authFail(response.message))
                    }
                })
                .catch(err => {
                    dispatch(authFail(err.response.message))
                })
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
                            value={values.email}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group  password">
                        <label htmlFor="password"> Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="6+ characters"
                            className="form-control"
                            value={values.password}
                            onChange={onInputChange}
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
