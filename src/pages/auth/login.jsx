import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa'
import Image from '@/assets/images/illustration.png'

export const Login = () => {
    return (
        <section className="login-screen">
            <div className="login-screen__left">
                <img src={Image} alt="Login" />
            </div>
            <div className="login-screen__right">
                <header className="login-screen__left--header">
                    <h2> Welcome Back!</h2>
                    <p>Login to your account</p>
                </header>
                <form action="">
                    <div className="form-group">
                        <label for="email"> Email</label>
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group  password">
                        <label for="password"> Password</label>
                        <input
                            type="text"
                            placeholder="8+ characters"
                            className="form-control"
                        />

                        <MdOutlineRemoveRedEye />
                    </div>

                    <div className="form-group">
                        <button
                            type="submit"
                            className="button button__primary">
                            Login
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
