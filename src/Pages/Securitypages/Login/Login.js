import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import img from '../../../assets/Login/login-img.jpg'
import { Form, Link } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../../Context/MassContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const provider =new GoogleAuthProvider();

    const gitProvider =new GithubAuthProvider();

    const {user,signInWithGoogle,loginWithEmail}=useContext(AuthContext);

    console.log(user)

    const handleLoginWithEmail=(event)=>{
        event.preventDefault()
        const from =event.target;
        const email=from.email.value;
        const password =from.password.value;

        from.reset('')

        loginWithEmail(email,password)
        .then((result)=>{
            const user =result.user;
        })
        .catch((error)=>{
            console.error('firebase error', error)
        })
    }

    const handleLoginWithGoogle=()=>{
        signInWithGoogle(provider)
        .then((result)=>{
            const user =result.user
        })
        .catch((error)=>{
            console.err('firebase error',error)
        })
    }


    const handleLoginWithGithub=()=>{
        signInWithGoogle(gitProvider)
        .then((result)=>{
            const user =result.user;
        })
        .catch((error)=>{
            console.err('firebase error', error)

        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row md:flex-row">

                    <img className='img-sige lg:p-10' src={img} alt="" />

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mt-5">Login now</h1>
                    </div>
                        <Form onSubmit={handleLoginWithEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                name='email'
                                className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                name="password"
                                className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </Form>

                        <div className='flex justify-center'>
                                <button onClick={handleLoginWithGoogle}><FcGoogle/></button>
                                <button onClick={handleLoginWithGithub} className='m-3 text-sky-600'><BsGithub/></button>
                            </div>

                        <p className='m-4 text-center'>Alredy have an not account <Link to={'/register'} className='text-red-300'>SignUp</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;