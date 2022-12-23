
import React from 'react';
import { Outlet } from 'react-router-dom';
import MenuBar from '../Pages/Afootpages/Courses/CatagoryItems/MenuBar';
import Header from '../Pages/Fixdpages/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <div className='grid grid-cols-1'>
                    <MenuBar></MenuBar>
                </div>
                <div className='grid m-5'>
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default Main;