import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoursesItems from '../CoursesDetails/CoursesItems/CoursesItems';
import MenuBar from './CatagoryItems/MenuBar';

const Courses = () => {
    const ask =useLoaderData()
    console.log(ask)
    return (
        <div>
         {/* <CoursesItems></CoursesItems> */}
        </div>
    );
};

export default Courses;