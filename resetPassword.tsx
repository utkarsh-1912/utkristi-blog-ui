import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import Router from 'next/router'
import { useAuth } from '../context/AuthContext';

const ResetPassword = () => {
    const {user, resetPassword } = useAuth();
    const [data,setData] = useState({
        email:'',
    })
   
    const handleResetAction = async (e:any)=>{
    e.preventDefault();
    try{
      await resetPassword(data.email);
      console.log(user);
    }catch(err){
      console.log(err);
    }
    toast.success("Password Reset Link sent to your email !!");
    Router.push('/login');
  }
  return (
    <div>
            <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0 bg-gray-50 py-4 md:py-10">
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleResetAction}>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={(e:any)=>{
                                        setData({
                                            ...data,
                                            email:e.target.value,
                                        })
                                    }}
                                    value={data.email}
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 outline-none px-2 py-1"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary-200 focus:outline-none focus:bg-primary-200" type="submit">
                                Reset Password
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Don&#39;t have an account?{" "}
                        <span className="text-primary hover:underline">
                            <Link href="/signin">
                                Sign In
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default ResetPassword;