import React from 'react';
import user from "../../assets/user.png";
import styles from './header.module.css';
import { FaAccessibleIcon, FaBook, FaBrush, FaChartLine, FaGear, FaHouse, FaMessage } from "react-icons/fa6";

const LeftPart = () => {
    return (
        <div>
            <div className="card">
                <div className='d-flex'>
                    <img src={user} className={`card-img-top rounded-circle p-1 ${styles.user}`} alt="user-image" />
                    <div className="card-body">
                        <p className="card-text fw-bold mb-0">John Doe</p>
                        <p className="card-text">#johndoe789</p>
                    </div>
                </div>
            </div>

            <div className={`card mt-4 ${styles.customCard}`}>
                <div className={`d-flex align-items-center p-3 ${styles.hoverEffect}`}>
                    <FaHouse />
                    <p className="card-text fw-bold ps-4">Home</p>
                </div>

                <div className={`d-flex align-items-center p-3 ${styles.hoverEffect}`}>
                    <FaAccessibleIcon />
                    <p className="card-text fw-bold ps-4">Explore</p>
                </div>

                <div className={`d-flex align-items-center p-3 ${styles.hoverEffect}`}>
                    <FaMessage />
                    <p className="card-text fw-bold ps-4">Notifications</p>
                </div>

                <div className={`d-flex align-items-center p-3 ${styles.hoverEffect}`}>
                    <FaBook />
                    <p className="card-text fw-bold ps-4">Bookmarks</p>
                </div>

                <div className={`d-flex align-items-center p-3 ${styles.hoverEffect}`}>
                    <FaChartLine />
                    <p className="card-text fw-bold ps-4">Analytics</p>
                </div>

                <div className={`d-flex align-items-center p-3 ${styles.hoverEffect}`}>
                    <FaBrush />
                    <p className="card-text fw-bold ps-4">Theme</p>
                </div>

                <div className={`d-flex align-items-center p-3 ${styles.hoverEffect}`}>
                    <FaGear />
                    <p className={`card-text fw-bold ps-4 ${styles.pointer}`}>Settings</p>
                </div>
            </div>
        </div>
    );
};

export default LeftPart;