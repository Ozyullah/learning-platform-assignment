import React from 'react';
import errorimage from '../assets/error/error4o4.jpg'

const ErrorPage = () => {
    return (
        <div className=''>
            <img className='w-96 h-screen w-max grid items-center' src={errorimage} alt="" />
        </div>
    );
};

export default ErrorPage;