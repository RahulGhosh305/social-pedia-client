import React from 'react';
import styles from './header.module.css';
import user from "../../assets/user.png"
import { FaHeart } from 'react-icons/fa6';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { useNavigate } from "react-router-dom";
import { useGetPostsQuery } from '../../redux/services/social/socialApi.js';

const Posts = () => {
    const navigate = useNavigate();
    const { data: posts, isLoading, isError } = useGetPostsQuery();

    // console.log(posts?.data);
    const handleNavigate = (id) => {
        navigate(`/post-details/${id}`);
    }
    return (
        <div className='mt-3'>
            {
                posts?.data?.map(post => {
                    // 
                    return <div key={post._id} className={`mb-3 ${styles.postBox}`}>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center mb-3'>
                                <div className={styles.messageFriendImg}>
                                    <img src={user} className={`card-img-top rounded-circle`} alt="user-image" />
                                </div>
                                <div>
                                    <p className="card-text mb-0 fw-bold">{post?.user?.name}</p>
                                    {/* <p className={`card-text fw-bold ${styles.messageText}`}>{post?.createdAt}</p> */}
                                </div>
                            </div>
                            <div>
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                        <div className="card" >
                            <img src={post?.postPhoto} className="card-img-top" alt="Posted Image" />
                            <div className="card-body">
                                <p>{post?.postText}</p>

                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <FaHeart /> 1
                                    </div>
                                    <button type="button" className="btn btn-secondary" onClick={() => handleNavigate(post._id)}>See Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    // 
                })
            }

        </div>
    );
};

export default Posts;