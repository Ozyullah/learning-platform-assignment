import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MenuBar from './CatagoryItems/MenuBar';

const Courses = () => {
    const ask =useLoaderData()
    console.log(ask)
    return (
        <div>
           {
            ask.map(ak=><MenuBar key={ak.id} anik={ak}></MenuBar>
            )}
        </div>
    );
};

export default Courses;