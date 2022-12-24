import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourses from './AllCourses';

const Home = () => {
    const allItems = useLoaderData()
    console.log(allItems)
    return (
        <div>
            <div>
                <h2 className='font-bold text-center text-xl'>Computer Science and Engeniaring Tutorial</h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-7'>

                {
                    allItems.map(item => <AllCourses key={item.id} letter={item}></AllCourses>)
                }

            </div>
                <h4 className='text-xl font-bold m-10 text-blue-700'>For Details you visite Courses route</h4>
        </div>
    );
};

export default Home;