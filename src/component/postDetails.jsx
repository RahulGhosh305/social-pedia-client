import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import img3 from "../assets/instagram-img3.jpg"
import styles from "../component/Header/header.module.css"
import { FaHeart } from 'react-icons/fa6';
import client1 from "../assets/c1.jpg";
import user from "../assets/user.png"
import { useGetSinglePostQuery } from '../redux/services/social/socialApi';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const [comment, setComment] = useState('');

    let { id } = useParams();
    const { data: post, isLoading, isError } = useGetSinglePostQuery(id);
    const [userInfo, setUserInfo] = useState("")

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('http://localhost:5000/api/v1/auth/protected-user', {
            method: 'POST',
            body: JSON.stringify({ token: token }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUserInfo(data)
            });

    }, [])

    const refresh = () => {
        window.location.reload();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const commentbody = {
            commentText: comment,
            user: {
                name: userInfo.username,
                photo: userInfo.photo
            }
        }
        const id = post?.data?._id
        fetch(`http://localhost:5000/api/v1/social/add-comment/${id}`, {
            method: 'POST',
            body: JSON.stringify(commentbody),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                refresh()
            });

    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className='mt-5'>
                    <div className='d-flex align-items-center mb-3'>
                        <div className={styles.messageFriendImg}>
                            <img src={user} className={`card-img-top rounded-circle`} alt="user-image" />
                        </div>
                        <div className='ms-3'>
                            <h3>{post?.data?.user?.name}</h3>
                            {/* <p className={`card-text fw-bold `}>6:30 pm</p> */}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div>
                            <div className="card mb-3">

                                <img src={post?.data?.postPhoto} className="card-img-top" alt="Posted Image" />

                                <div className="card-body">
                                    <p className="card-text">{post?.data?.postText}</p>


                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <FaHeart /> 1
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h4>Post a Commnet</h4>

                        {/* Comment Form */}
                        <form className='mb-3' onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Add here comment"
                                className='form-control'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <br />

                            <div className='d-flex justify-content-center'>
                                <button type="submit" data-bs-dismiss="modal" className='btn btn-secondary' >
                                    Update
                                </button>
                            </div>
                        </form>

                        {
                            post?.data?.comments?.map(comment => {
                                return <div key={comment._id} className="card mb-3">
                                    <div className='d-flex align-items-center mt-2'>
                                        <div className={styles.messageFriendImg}>
                                            <img src={client1} className={`card-img-top rounded-circle px-2`} alt="user-image" />
                                        </div>
                                        <div>
                                            <p className="card-text mb-0 fw-bold">{comment?.user?.name}</p>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <p className="card-text">{comment?.commentText}</p>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PostDetails;