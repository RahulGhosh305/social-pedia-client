import React from 'react';
import styles from './header.module.css';
import img from "../../assets/instagram-img4.jpg"
import img2 from "../../assets/instagram-img6.jpg"
import img3 from "../../assets/instagram-img5.jpg"
import user from "../../assets/user.png"
import { FaHeart } from 'react-icons/fa6';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { useNavigate } from "react-router-dom";

const Posts = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/post-details");
    }
    return (
        <div className='mt-3'>
            <div className={`mb-3 ${styles.postBox}`}>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center mb-3'>
                        <div className={styles.messageFriendImg}>
                            <img src={user} className={`card-img-top rounded-circle`} alt="user-image" />
                        </div>
                        <div>
                            <p className="card-text mb-0 fw-bold">John Doe</p>
                            <p className={`card-text fw-bold ${styles.messageText}`}>6:30 pm</p>
                        </div>
                    </div>
                    <div>
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className="card" >
                    <img src={img3} className="card-img-top" alt="Posted Image" />
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptate!</p>

                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <FaHeart /> 1
                            </div>
                            <button type="button" class="btn btn-secondary" onClick={() => handleNavigate()}>See Details</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mb-3 ${styles.postBox}`}>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center mb-3'>
                        <div className={styles.messageFriendImg}>
                            <img src={user} className={`card-img-top rounded-circle`} alt="user-image" />
                        </div>
                        <div>
                            <p className="card-text mb-0 fw-bold">John Doe</p>
                            <p className={`card-text fw-bold ${styles.messageText}`}>6:30 pm</p>
                        </div>
                    </div>
                    <div>
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className="card" >
                    <img src={img} className="card-img-top" alt="Posted Image" />
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptate!</p>
                        <FaHeart /> 1
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Posts;