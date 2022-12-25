import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DescriptionHead from './DescriptionHead';
import { ref } from './DescriptionHead';
import './CoursesDescription.css'


const CoursesDescription = () => {

    const albums =useLoaderData()
    console.log(albums)
    return (
        <div>
           <DescriptionHead></DescriptionHead>
           <div className='m-10 reader' ref={ref}>
               <img className='flex justify-center' src={albums.img} alt="" />
               <h4 className='text-4xl'>{albums.name}</h4>
               <p className='text-xl'>{albums.descriptions}</p>
           </div>
           <div className='flex justify-end'>
            <Link to={`/premium/${albums._id}`} className="btn btn-outline btn-primary rounded-md m-5 p-2">Cheackout page</Link>
           </div>
        </div>
    );
};

export default CoursesDescription;