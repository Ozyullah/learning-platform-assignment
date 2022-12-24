import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesPart from './CoursesPart';

const CoursesItems = () => {
    const studies =useLoaderData()
    console.log(studies)
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-7'>
            {
                studies.map(stude=><CoursesPart key={stude._id}
                stude={stude}></CoursesPart>)
            }
        </div>
    );
};

export default CoursesItems;