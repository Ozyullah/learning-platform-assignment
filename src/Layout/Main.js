
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuBar from '../Pages/Afootpages/Courses/CatagoryItems/MenuBar';
import Courses from '../Pages/Afootpages/Courses/Courses';
import Header from '../Pages/Fixdpages/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <div className='grid grid-cols-1'>
            {/* defferent design */}
                    {/* <MenuBar></MenuBar> */}
                    {/* <Courses></Courses> */}
                </div>
                <div className='grid m-5 mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default Main;