import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
// import { auth } from '../config/firebase';
import Image from 'next/image';


// const user = auth.currentUser;
// const {user} = useAuth();
const user={
    displayName:'Utkristi-User-0126',
    photoURL:'',
    email:'Not Available',
    uid:"Not Available"
};

const Dashboard = () => {
  const [data,setData] = useState({
    name:'Utkristi-User-0126',
    imageUrl:'',
    email:'Not Available',
    uuid:"Not Available"
  })
  // if(user!=null){
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const photoURL = user.photoURL;
  //   const uid = user.uid;
  //   if(displayName){
  //     setData({
  //       ...data,
  //       name:displayName,
  //     })
  //   }
  //   if(email){
  //     setData({
  //       ...data,
  //       email:email||"",
  //     })
  //   }
  //   if(photoURL){
  //     setData({
  //       ...data,
  //       imageUrl:photoURL||"",
  //     })
  //   }
  //   if(uid){
  //     setData({
  //       ...data,
  //       uuid:uid||"",
  //     })
  //   }
  // }
  return (
  <div className ="flex justify-center align-center p-3 md:p-1 min-h-70vh bg-gray-100">
   <div className="p-8 pt-4 w-full">
   <div className="p-8 bg-white shadow mt-24">
    <div className="grid grid-cols-1 items-center">
     <div className="relative">
      <div className="w-32 h-32 md:w-48 md:h-48 bg-sky-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-primary-dark">
        {data.imageUrl!=''?<Image width="w-32" height="32" src={data.imageUrl}/>: <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>}
       
      </div>
    </div>
  </div>

  <div className="mt-16 md:mt-28 text-center border-b pb-12">
    <h1 className="text-3xl font-medium text-gray-700">{data.name}</h1>
    <p className="font-light text-gray-600 mt-3">{data.email}</p>

    <p className="mt-8 text-gray-500">User Id - {data.uuid}</p>
    <p className="mt-2 text-gray-500">@ Utkristi Blogs</p>
  </div>

  {/* <div className="mt-12 flex flex-col justify-center">
    <p className="text-gray-600 text-center font-light lg:px-16">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
    <button
  className="text-indigo-500 py-2 px-4  font-medium mt-4"
>
  Show more
</button>
  </div> */}

</div>
</div>
  </div>
  )
}

export default Dashboard
