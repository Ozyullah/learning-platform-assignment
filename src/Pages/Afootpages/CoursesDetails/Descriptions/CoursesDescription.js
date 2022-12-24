import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DescriptionHead from './DescriptionHead';
import TaleDescription from './TaleDescription';
import { ref } from './DescriptionHead';
import './CoursesDescription.css'


const CoursesDescription = () => {

    const albums =useLoaderData()
    console.log(albums)
    return (
        <div className='reader'>
           <DescriptionHead></DescriptionHead>
           <div className='m-10' ref={ref}>
               <img src={albums.img} alt="" />
               <h4>{albums.name}</h4>
               <p>{albums.descriptions}</p>
           </div>
        </div>
    );
};

export default CoursesDescription;