import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import img from '../../../assets/Login/login-img.jpg'
import { Form, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row md:flex-row">

                    <img className='img-sige p-10' src={img} alt="" />

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mt-5">Login now!</h1>
                    </div>
                        <Form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </Form>

                        <div className='flex justify-center'>
                                <button><FcGoogle/></button>
                                <button className='m-3 text-sky-600'>< SiFacebook/></button>
                            </div>

                        <p className='m-4 text-center'>Alredy have an not account<Link to={'/register'} className='text-red-300'>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;