import React from 'react';
import { MdDescription } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CoursesPart = ({ stude }) => {

    const { name, img, } = stude;
    return (
        <div>
            <div className="card card-compact w-44 bg-base-100 shadow-xl">
                <figure><img className='w-44 h-20' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                   
                    <div className="card-actions justify-end">
                        <Link to={`/courses/${stude._id}`} className="flex items-center btn-outline btn-primary rounded-xl p-2 ">Details <MdDescription/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesPart;