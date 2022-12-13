import React from 'react';
import { Form, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import image from '../../../assets/Login/login-img.jpg'
import './Register.css'

const Register = () => {

    const addedUser=()=>{

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row md:flex-row">

                    <img className='registerImg md:mr-7 lg:mr-7' src={image} alt="" />

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="text-center mt-3">
                            <h1 className="text-4xl font-bold">SignIn</h1>
                        </div>

                        <Form onSubmit={addedUser} className="card-body">
                            {/* Fullname section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Fullname</span>
                                </label>
                                <input type="text" placeholder="please enter your Fullname" className="input input-bordered" />
                            </div>
                            {/* PhotoUrl section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text " placeholder="photoLink" className="input input-bordered" />
                            </div>
                            {/* email section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            {/* password section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                            </div>

                        </Form>

                        <div className='flex justify-center'>
                            <button><FcGoogle/></button>
                            <button className='m-3 text-sky-600'><SiFacebook/></button>
                        </div>
                            <p className='text-center m-5'>Alredy have an account <Link className='text-red-400' to={'/login'}>Login</Link></p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;