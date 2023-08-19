import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import styles from './signUp.module.css'
import { useNavigate } from 'react-router-dom';
import signUp from '../../assets/people.png'

import { useRegistrationMutation } from '../../redux/services/auth/authApi';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [university, setUniversity] = useState('');
    const [photo, setPhoto] = useState('');
    const navigate = useNavigate()
    const [register, { isLoading, data }] = useRegistrationMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLoading) {
            await register({ username, email, password, address, university, photo });
        }
    };

    if (data?.status === "User Created") {
        navigate('/signin')
    }

    const handleSignIn = () => {
        navigate('/signin')
    }

    return (
        <>
            <Navbar />
            <div className={styles.signUpWrapper}>
                <div className="container">
                    <div className="row mx-3">
                        <div className="col-md-5 card pb-4 mb-3 shadow my-auto">
                            <div className={styles.signUpText}>
                                <h4>Sign-Up</h4>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className='form-control'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <br />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    className='form-control'
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
                                <input
                                    type="text"
                                    placeholder="Address"
                                    value={address}
                                    className='form-control'
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <br />
                                <input
                                    type="text"
                                    placeholder="University"
                                    value={university}
                                    className='form-control'
                                    onChange={(e) => setUniversity(e.target.value)}
                                />
                                <br />

                                <div className='d-flex justify-content-center'>
                                    <button type="submit" className='btn btn-secondary' disabled={isLoading}>
                                        Register
                                    </button>
                                </div>
                            </form>

                            <p onClick={() => handleSignIn()} className={styles.registered}>*Already Registered! <u className="text-primary">Sign-In</u> </p>

                        </div>

                        <div className="col-md-7 d-flex justify-content-center">
                            <img src={signUp} alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
