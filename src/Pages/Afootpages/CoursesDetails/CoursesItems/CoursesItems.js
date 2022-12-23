import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesPart from './CoursesPart';

const CoursesItems = () => {
    const studies =useLoaderData()
    console.log(studies)
    return (
        <div>
            {
                studies.map(stude=><CoursesPart key={stude._id}
                stude={stude}></CoursesPart>)
            }
        </div>
    );
};

export default CoursesItems;