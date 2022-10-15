import React, { useState } from 'react'
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import Router from 'next/router';
import toast from 'react-hot-toast';

const Signin = () => {
    const {user , signin,signInWithGoogle, signInWithGit } = useAuth(); 
    console.log(user);
    const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    cpassword:'',
  })
  
  const handleSignIn = async (e:any)=>{
    e.preventDefault();
    if(data.password.length>5 && data.password == data.cpassword){
    try{
      await signin(data.name,data.email,data.password);
      console.log(user);
    }catch(err){
      console.log(err);
    }
    Router.push('/dashboard');
  }else if(data.password.length<5){
    toast.error("Minimum length for password is 6 !!");
  }else {
    toast.error("Confirmed Password is not same as Password. Recheck !!",{style:{textAlign:'center',padding:'5px'}})
  }
}
 const handleSignInWithGoogle = async (e:any)=>{
    e.preventDefault();
    try{
      await signInWithGoogle();
      console.log(user);
    }catch(err){
      console.log(err);
    }
    Router.push('/');
  }
  const handleSignInWithGit = async (e:any)=>{
    e.preventDefault();
    try{
      await signInWithGit();
      console.log(user);
    }catch(err){
      console.log(err);
    }
    Router.push('/');
  }

    return(
        <div>
            <div className="flex flex-col items-center pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div className="w-full px-6 py-4 mt-4 mb-4 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSignIn}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e:any)=>{
                                        setData({
                                            ...data,
                                            name:e.target.value,
                                        })
                                    }}
                                    value={data.name}
                                    type="text"
                                    name="name"
                                    required
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 outline-none px-2 py-1"
                                />
                            </div>
                        </div>
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
                                    required
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 outline-none px-2 py-1"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e:any)=>{
                                        setData({
                                            ...data,
                                            password:e.target.value,
                                        })
                                    }}
                                    value={data.password}
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 outline-none px-2 py-1"
                                required
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                onChange={(e:any)=>{
                                        setData({
                                            ...data,
                                            cpassword:e.target.value,
                                        })
                                    }}
                                    value={data.cpassword}
                                    type="password"
                                    name="password_confirmation"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 outline-none px-2 py-1"
                                />
                            </div>
                        </div>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-primary-200 focus:outline-none focus:bg-primary-200" type="submit">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span className="text-primary hover:underline" >
                            <Link href="/login">
                                Log in
                            </Link>
                        </span>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full" />
                        <p className="px-3 ">OR</p>
                        <hr className="w-full" />
                    </div>
                    <div className="my-6 space-y-2">
                        <button
                            onClick={handleSignInWithGoogle}
                            aria-label="SignIn with Google"
                            type="button"
                            className="flex items-center h10 justify-center w-full p-2 space-x-4 text-black transition-colors duration-200 transform bg-white hover:text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current"
                            >
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Sign In with Google</p>
                        </button>
                        <button
                            onClick={handleSignInWithGit}
                            aria-label="SignIn with GitHub"
                            role="button"
                            className="flex items-center h10 justify-center w-full p-2 space-x-4 text-black transition-colors duration-200 transform bg-white hover:text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 border"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-5 h-5 fill-current"
                            >
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                            <p>Sign In with GitHub</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin