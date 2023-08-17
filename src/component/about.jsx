import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import { useForm } from "react-hook-form"

const About = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <h2 className='my-3'>User Information</h2>
                    <div className='d-flex justify-content-center'>
                        <div className="col-md-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <div className='d-flex justify-content-end'>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Edit
                                        </button>

                                    </div>
                                    <h3 className="card-title">Name : John doe</h3>
                                    <p className='lead'>Email : example@gmail.com</p>
                                    <p className='lead'>University :  Comilla University</p>
                                    <p className='lead'>Address : Bazrapur, Cumilla</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Form</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* Edit Form */}
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className="form-control" placeholder='Name' {...register("name", { required: true })} />
                                {errors.name && <span>This field is required</span>}
                                <br />
                                <input type='email' className="form-control" placeholder='Email' {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                                <br />
                                <input className="form-control" placeholder='University' {...register("university", { required: true })} />
                                {errors.university && <span>This field is required</span>}
                                <br />
                                <input className="form-control" placeholder='Address' {...register("address", { required: true })} />
                                {errors.address && <span>This field is required</span>}
                                <br />
                                <input type="submit" />
                            </form>

                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;