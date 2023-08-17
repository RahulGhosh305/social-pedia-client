import React from 'react';
import client1 from "../../assets/c1.jpg";
import client2 from "../../assets/c2.jpg";
import client3 from "../../assets/c3.jpg";
import client4 from "../../assets/c4.jpg";
import client5 from "../../assets/c5.jpg";
import client6 from "../../assets/c6.jpg";
import styles from './header.module.css';

const RightPart = () => {
    return (
        <div>
            <div className="card">
                <div className="card-header text-center bg-dark text-white fw-bold">Messages</div>
                <ul className="list-group list-group-flush">
                    <li className={`list-group-item ${styles.pointer}`}>
                        <div className='d-flex align-items-center'>
                            <div className={styles.messageFriendImg}>
                                <img src={client1} className={`card-img-top rounded-circle px-2`} alt="user-image" />
                            </div>
                            <div>
                                <p className="card-text mb-0 fw-bold">John Doe</p>
                                <p className={`card-text fw-bold ${styles.messageText}`}>2 new messages</p>
                            </div>
                        </div>
                    </li>
                    <li className={`list-group-item ${styles.pointer}`}>
                        <div className='d-flex align-items-center'>
                            <div className={styles.messageFriendImg}>
                                <img src={client2} className={`card-img-top rounded-circle px-2`} alt="user-image" />
                            </div>
                            <div>
                                <p className="card-text mb-0 fw-bold">Samiul Karim</p>
                                <p className={`card-text ${styles.messageText}`}>ok</p>
                            </div>
                        </div>
                    </li>
                    <li className={`list-group-item ${styles.pointer}`}>
                        <div className='d-flex align-items-center'>
                            <div className={styles.messageFriendImg}>
                                <img src={client3} className={`card-img-top rounded-circle px-2`} alt="user-image" />
                            </div>
                            <div>
                                <p className="card-text mb-0 fw-bold">Smith</p>
                                <p className={`card-text fw-bold ${styles.messageText}`}>Received.. thanks!</p>
                            </div>
                        </div>
                    </li>
                    <li className={`list-group-item ${styles.pointer}`}>
                        <div className='d-flex align-items-center'>
                            <div className={styles.messageFriendImg}>
                                <img src={client4} className={`card-img-top rounded-circle px-2`} alt="user-image" />
                            </div>
                            <div>
                                <p className="card-text mb-0 fw-bold">Farrah</p>
                                <p className={`card-text ${styles.messageText}`}>Happy Birthday!</p>
                            </div>
                        </div>
                    </li>
                    <li className={`list-group-item ${styles.pointer}`}>
                        <div className='d-flex align-items-center'>
                            <div className={styles.messageFriendImg}>
                                <img src={client5} className={`card-img-top rounded-circle px-2`} alt="user-image" />
                            </div>
                            <div>
                                <p className="card-text mb-0 fw-bold">Jacab Sha</p>
                                <p className={`card-text ${styles.messageText}`}>Lol u right</p>
                            </div>
                        </div>
                    </li>
                    <li className={`list-group-item ${styles.pointer}`}>
                        <div className='d-flex align-items-center'>
                            <div className={styles.messageFriendImg}>
                                <img src={client6} className={`card-img-top rounded-circle px-2`} alt="user-image" />
                            </div>
                            <div>
                                <p className="card-text mb-0 fw-bold">Simi Khan</p>
                                <p className={`card-text ${styles.messageText}`}>Done got it.</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <span className={`text-center py-2 ${styles.pointer}`}>See more...</span>
            </div>
        </div>
    );
};

export default RightPart; 