import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../Store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import signupImage from '../assets/img9.png';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError('');
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) dispatch(login(currentUser));
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
                    <img src={signupImage} alt="Right Side Image" className="h-3/4" />
                </div>
             
                <div className="flex items-center justify-center w-full md:w-1/2 bg-gray-900">
                    <div className="max-w-md md:max-w-lg px-6 py-8 bg-gray-700 rounded-lg shadow-lg">
                        <div className="flex justify-center mb-6">
                            <Logo width="100px" />
                        </div>
                        <h2 className="text-center text-3xl font-bold mb-4">Sign up to create account</h2>
                        <p className="mt-2 text-center text-base text-gray-400">
                            Already have an account?&nbsp;
                            <Link
                                to="/login"
                                className="font-medium text-indigo-400 transition-all duration-200 hover:underline"
                            >
                                Sign In
                            </Link>
                        </p>
                        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

                        <form onSubmit={handleSubmit(create)}>
                            <div className="space-y-5">
                                <Input
                                    label="Full Name: "
                                    placeholder="Enter your full name"
                                    {...register('name', {
                                        required: true,
                                    })}
                                />
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
                                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                                    Create Account
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
