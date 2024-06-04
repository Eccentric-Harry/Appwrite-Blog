import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../Store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
import bgImage from '../assets/img7.png'; 

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const login = async (data) => {
        setError('');
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(authLogin(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="flex w-full h-full">
               
                <div className="hidden md:flex md:w-1/2 justify-center items-center">
                    <img src={bgImage} alt="Left Side Image" className="h-3/4" />
                </div>
                
                <div className="flex items-center justify-center w-full md:w-1/2 bg-gray-900">
                    <div className="max-w-md  p-8 bg-gray-700 rounded-lg shadow-lg">
                        <div className="flex justify-center mb-6">
                            <Logo width="100px" />
                        </div>
                        <h2 className="text-center text-3xl font-bold mb-4">Sign in to your account</h2>
                        <form onSubmit={handleSubmit(login)}>
                            <Input
                                label="Email: "
                                placeholder="Enter your email"
                                type="email"
                                {...register('email', {
                                    required: true,
                                    validate: {
                                        matchPattern: (value) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            'Email address must be a valid address',
                                    },
                                })}
                            />
                            <Input
                                label="Password: "
                                type="password"
                                placeholder="Enter your password"
                                {...register('password', {
                                    required: true,
                                })}
                            />
                            <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg mt-4">
                                Sign in
                            </Button>
                        </form>
                        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
                        <p className="mt-4 text-center">
                            Don't have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-medium text-indigo-400 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
