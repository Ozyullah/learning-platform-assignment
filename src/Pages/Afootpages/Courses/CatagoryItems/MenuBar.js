import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiQuillInk } from 'react-icons/gi'
import CardItems from './CardItems';



const MenuBar = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('https://learning-platforn-assignment-server.vercel.app/catagory')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div className='lg:flex md:flex sm:grid'>
            {/* courses display sidebar */}
            <div className='m-5 lg:grid md:m-10'>
            
                {
                    catagories.map(catagore => <p className='p-1' key={catagore.id}><Link className=' text-blue-500 md:flex lg:grid' to={`/catagory/${catagore.id}`}><GiQuillInk />{catagore.name}</Link></p>)
                }
            </div>

            {/* courses display details section */}
            <div className='m-4 sm:m-0'>
               
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-7'>
                    {
                        catagories.map(catagore => <CardItems className='p-1' key={catagore.id} menues={catagore}></CardItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MenuBar;