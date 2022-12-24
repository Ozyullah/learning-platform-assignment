import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DescriptionHead from './DescriptionHead';
import TaleDescription from './TaleDescription';
import { ref } from './DescriptionHead';
import './CoursesDescription.css'


const CoursesDescription = () => {

    const albums =useLoaderData()
    console.log(albums)
    return (
        <div>
           <DescriptionHead></DescriptionHead>
           <div className='m-10 reader' ref={ref}>
               <img src={albums.img} alt="" />
               <h4 className='text-4xl'>{albums.name}</h4>
               <p className='text-xl'>{albums.descriptions}</p>
           </div>
           <div className='flex justify-end'>
            <Link to={''} className=" btn-outline rounded-md m-5 p-2">Cheackout page</Link>
           </div>
        </div>
    );
};

export default CoursesDescription;