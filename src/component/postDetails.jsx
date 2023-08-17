import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import img3 from "../assets/instagram-img3.jpg"
import styles from "../component/Header/header.module.css"
import { FaHeart } from 'react-icons/fa6';
import client1 from "../assets/c1.jpg";
import { useForm } from "react-hook-form"
import user from "../assets/user.png"


const PostDetails = () => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => console.log(data)

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
                            <h3>John Doe</h3>
                            <p className={`card-text fw-bold `}>6:30 pm</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div>
                            <div className="card mb-3">

                                <img src={img3} className="card-img-top" alt="Posted Image" />

                                <div className="card-body">
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>


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

                        <form className='mb-3' onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-2'>
                                <input className="form-control" placeholder='Post your comment...' {...register("exampleRequired", { required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>

                            <input type="submit" />
                        </form>


                        <div class="card mb-3">
                            <div className='d-flex align-items-center mt-2'>
                                <div className={styles.messageFriendImg}>
                                    <img src={client1} className={`card-img-top rounded-circle px-2`} alt="user-image" />
                                </div>
                                <div>
                                    <p className="card-text mb-0 fw-bold">John Doe</p>
                                </div>
                            </div>

                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PostDetails;