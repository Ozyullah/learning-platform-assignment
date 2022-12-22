import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const ask =useLoaderData()
    console.log(ask)
    return (
        <div>
           {
            ask.map(ak=><div key={ak._id}><img className='w-20 h-auto' src={ak.img} alt="" /></div>
            )}
        </div>
    );
};

export default Courses;