import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';


const About = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [university, setUniversity] = useState('');
    const [userInfo, setUserInfo] = useState("")

    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch('https://social-pedia-server-780h.onrender.com/api/v1/auth/protected-user', {
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
    // console.log(userInfo);

    const refresh = () => {
        window.location.reload();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updates = {
            username: username,
            // email: email,
            address: address,
            university: university
        }
        const id = userInfo.id
        fetch(`https://social-pedia-server-780h.onrender.com/api/v1/auth/update-profile/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updates),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUserInfo(data)
                refresh()
            });

    };


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <h2 className='mt-3'>User Email :  {userInfo?.email}</h2>
                    <div className='d-flex mt-5 justify-content-center'>
                        <div className="col-md-6 ">
                            <div className="card">
                                <div className="card-body">
                                    <div className='d-flex justify-content-end'>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Edit
                                        </button>

                                    </div>
                                    <h3 className="card-title">Name : {userInfo?.username}</h3>
                                    {/* <p className='lead'>Email : {userInfo?.email}</p> */}
                                    <p className='lead'>University :  {userInfo?.university}</p>
                                    <p className='lead'>Address : {userInfo?.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className='form-control'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <br />
                                {/* <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                /> */}
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
                                    <button type="submit" data-bs-dismiss="modal" className='btn btn-secondary' >
                                        Update
                                    </button>
                                </div>
                            </form>
                            {/* Edit Form */}
                            {/* <form onSubmit={handleSubmit(onSubmit)}>

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
                                <input type="submit" data-bs-dismiss="modal" />
                            </form> */}

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