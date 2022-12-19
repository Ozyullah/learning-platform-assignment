import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const albams =useLoaderData();
    console.log(albams)

    return (
        <div>
            {
                albams.map((album)=><div className='text-blue-600' key={album.id}><Link href="https://www.facebook.com/">{album.name}</Link></div>)
            }
        </div>
    );
};

export default Courses;