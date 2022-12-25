import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { HiUserGroup } from 'react-icons/hi'


const CheckOut = () => {

    const cheack = useLoaderData();
    console.log(cheack)
    return (
        <div>
            <h2 className='text-3xl font-bold text-center m-5'>{cheack.name}</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <h3 className='text-center p-3 text-xl font-bold text-gray-500'>{cheack.quality}</h3><hr />

                <figure className="px-10 pt-10">
                    <img src={cheack.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Price: {cheack.price}</h2>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='m-5'>
                        <button className=' btn-outline p-1 rounded-lg text-blue-300'>Get it</button>
                    </div>
                    <div className="card-body items-end">
                        <h2 className='flex items-center'><HiUserGroup />{cheack.users}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;