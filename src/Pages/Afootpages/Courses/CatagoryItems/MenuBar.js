import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiQuillInk } from 'react-icons/gi'


const MenuBar = () => {
    // const [catagories,setCatagories]=useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/catagory')
    //     .then(res => res.json())
    //     .then(data => setCatagories(data))
    // },[])
    return (
        <div className='m-5'>
            this is Menu Sections
           {/* {
                catagories.map(catagore=><p className='p-1' key={catagore.id}><Link className=' text-blue-500' to={`/catagory/${catagore.id}`}><GiQuillInk/>{catagore.name}</Link></p>)
           } */}
        </div>
    );
};

export default MenuBar;