import { Container } from 'postcss';
import React from 'react';
import { Outlet } from 'react-router-dom';
import CoursesItems from '../Pages/Afootpages/CoursesDetails/CoursesItems/CoursesItems';
import Header from '../Pages/Fixdpages/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex'>
                <div className='grid grid-cols-2 ml-6'>
                    <CoursesItems></CoursesItems>
                </div>
                <div className='grid grid-cols-1'>
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default Main;