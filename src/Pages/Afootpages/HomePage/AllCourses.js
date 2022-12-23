import React from 'react';
import { Link } from 'react-router-dom';

const AllCourses = ({ letter }) => {

    const { name, img , catagory_id } = letter;
    return (
        <div>
            <div className="card w-52 bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl w-44 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p></p>
                    <div className="card-actions">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;