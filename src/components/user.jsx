// src/components/User.js
import React from 'react';
import Nav from './navbar'; // Ensure this path is correct
import CreateEvent from './CreateEvent'; // Ensure this path is correct

export const User = () => {
    return (
        <div className='User'>
            <Nav />
            <CreateEvent />
        </div>
    );
};

export default User;
