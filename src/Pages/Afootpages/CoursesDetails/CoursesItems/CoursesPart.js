import React from 'react';

const CoursesPart = ({ stude }) => {

    const {name, img}=stude;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default CoursesPart;