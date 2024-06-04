import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../Store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            className='inline-block text-white bg-transparent duration-200 hover:bg-gray-700 rounded-md px-4 py-2 text-sm md:text-base'
            onClick={logoutHandler}
        >
            LOGOUT
        </button>
    );
}

export default LogoutBtn;
