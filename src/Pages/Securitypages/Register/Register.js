import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import image from '../../../assets/Login/login-img.jpg'
import './Register.css'
import { AuthContext } from '../../../Context/MassContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Register = () => {

    const provider = new GoogleAuthProvider();

    const gitProvider = new GithubAuthProvider();

    const { addedUserWithEmail, updateCase, user, signInWithGoogle, loading, setUser } = useContext(AuthContext);

    console.log(user)

    const addedUser = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        const photo = from.photo.value;
        const name = from.name.value;

        from.reset('')

        addedUserWithEmail(email, password)
            .then(reasult => {
                const user = reasult.user;
                profileUse(name, photo, user)

            })
            .catch((error) => { console.error('firebaseError', error) })

    }


    const profileUse = (name, photo, user) => {
        updateCase(name, photo)
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo })
            })
            .catch((error) => {
                console.error('firebase error', error)
            })
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(provider)
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                console.error('firebaseError', error)
            })
    }


    const handleSignInWithGithub = () => {
        signInWithGoogle(gitProvider)
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                console.error('firebaseError', error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row md:flex-row">

                    <img className='registerImg md:mr-7 lg:mr-7' src={image} alt="" />

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="text-center mt-3">
                            <h1 className="text-3xl font-bold">Sign in</h1>
                        </div>

                        <Form onSubmit={addedUser} className="card-body">
                            {/* Fullname section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Fullname</span>
                                </label>
                                <input type="text" placeholder="please enter your Fullname"
                                    name='name' className="input input-bordered" />
                            </div>
                            {/* PhotoUrl section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" placeholder="photoLink"
                                    name='photo' className="input input-bordered" />
                            </div>
                            {/* email section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name='email' className="input input-bordered" />
                            </div>
                            {/* password section start */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                            </div>

                        </Form>

                        <div className='flex justify-center'>
                            <button onClick={handleGoogleSignIn}><FcGoogle /></button>
                            <button onClick={handleSignInWithGithub} className='ml-3'><BsGithub /></button>

                        </div>
                        <p className='text-center m-5'>Alredy have an account <Link className='text-red-400' to={'/login'}>Login</Link></p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;