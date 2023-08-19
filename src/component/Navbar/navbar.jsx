import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import { NavLink, Navigate } from 'react-router-dom';
import styles from './Navbar.module.css'
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const [token, setToken] = useState(true)

    useEffect(() => {
        const getToken = useAuth()
        setToken(getToken)
    }, [token])

    const SignOut = () => {
        localStorage.clear();
        setToken(false)
        Navigate('/signin')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" width={40} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/'>Media</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => (isActive ? `nav-link ${styles.isActive}` : `nav-link ${styles.inActive}`)} to='/message'>Message</NavLink>
                        </li>
                    </ul>
                    <div>
                        {
                            token === true ? <button onClick={() => SignOut()} className={`btn btn-secondary ${styles.outBtn}`} >SignOut</button> : <NavLink to="/signin" className={`btn btn-secondary ${styles.inBtn}`} >SignIn</NavLink>
                        }

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;