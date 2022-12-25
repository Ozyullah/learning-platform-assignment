import React from 'react';
import { GiQuillInk } from 'react-icons/gi';
import { TbSitemap } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const CardItems = ({ menues }) => {

    const { name, id, img } = menues;
    return (
        <div className='ml-5 mr-5'>
            <div className="card w-52 bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl w-44 h-20" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                </div>
                <div className="card-actions justify-end m-5">
                    <Link className='flex items-center btn-outline btn-primary rounded-xl p-2' to={`/catagory/${id}`}>Items <TbSitemap /></Link>
                </div>
            </div>

        </div>
    );
};

export default CardItems;