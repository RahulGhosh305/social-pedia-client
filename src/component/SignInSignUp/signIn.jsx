import React, { useState } from 'react';
import Navbar from '../../component/Navbar/navbar';
import styles from './signIn.module.css'
import { useNavigate } from 'react-router-dom';

import signinImg from '../../assets/signinImg.png'

import { useLoginMutation } from '../../redux/services/auth/authApi.js';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const [login, { isLoading, data }] = useLoginMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoading) {
            const response = await login({ email, password });
            const token = response?.data?.data
            localStorage.setItem('token', token);
        }
    };

    if (data?.status === "loggedIn") {
        navigate('/')
    }

    const handleSignUp = () => {
        navigate('/signup')
    }
    return (
        <>
            <Navbar />
            <div className={styles.loginWrapper}>
                <div className="container">
                    <div className="row mx-3">
                        <div className="col-md-5 card pb-4 shadow my-auto">
                            <div className={styles.signInText}>
                                <h4>Sign-In</h4>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <br />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className='form-control'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <br />
                                <div className='d-flex justify-content-center'>
                                    <button type="submit" className='btn btn-secondary' disabled={isLoading}>
                                        Login
                                    </button>
                                </div>
                            </form>

                            <p onClick={() => handleSignUp()} className={styles.notRegistered}>*Not Register! <u className="text-primary">Sign-Up</u> </p>

                            <div className={styles.googleBtnWrapper}>
                                <h4> <u> Or Sign In with </u> </h4>
                                <div className="d-flex justify-content-center">
                                    {/* <button onClick={signInWithGoogle} className={`btn btn-sm ${styles.googleBtn}`}>Google</button> */}
                                    <button className={`btn btn-sm btn-secondary ${styles.googleBtn}`}>Google</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7 d-flex justify-content-center">
                            <img src={signinImg} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;