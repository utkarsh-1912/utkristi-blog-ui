import React , {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [navbar,setNavbar] = useState(false);
  return (
    <div>
      <nav className='flex item-center justify-between py-4 px-2 border-b-2 border-gray-100'>
        <div className="md:hidden">
                <button
                  className="p-2 ml-4 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
        <ul className={`justify-content-center pb-3 mt-8 block ${navbar?'block':'hidden'} transition-all fixed w-full bg-white items-center`} style={{borderRadius:"0 5px 5px 0"}}>
            <li className='text-center font-medium text-gray-600 hover:text-gray-400 hover:text-primary hover:bg-gray-100 border-b-2 border-dashed' style={{whiteSpace:'nowrap'}}><Link href="/">Popular Posts</Link></li>
            <li className='text-center font-medium text-gray-600 hover:text-gray-400 hover:text-primary hover:bg-gray-100 border-b-2 border-dashed'><Link href="/">Resources</Link></li>
            <li className='text-center font-medium text-gray-600 hover:text-gray-400 hover:text-primary hover:bg-gray-100 border-b-2 border-dashed'><Link href="/">Tutorials</Link></li>
            <li className='text-center font-medium text-gray-600 hover:text-gray-400 hover:text-primary hover:bg-gray-100 border-b-2 border-dashed'><Link href="/">Community</Link></li>
        </ul>
              </div>
        <Link href="/">
            <div className='flex ml-3 md:ml-0 items-center cursor-pointer'>
                <Image src="/logo.png" height={35} width={40}/>
                <span className="font-bold ml-2 text-primary hidden md:inline" style={{'fontSize':'1.4rem','whiteSpace': 'nowrap'}}>Utkristi <i className="mr-1 text-gray-400">B</i>logs</span>
            </div>
        </Link>
        <ul className="md:flex items-center hidden">
            <li className='mr-6 font-medium text-gray-600 hover:text-gray-400' style={{whiteSpace:'nowrap'}}><Link href="/">Popular Posts</Link></li>
            <li className='mr-6 font-medium text-gray-600 hover:text-gray-400'><Link href="/">Resources</Link></li>
            <li className='mr-6 font-medium text-gray-600 hover:text-gray-400'><Link href="/">Tutorials</Link></li>
            <li className='mr-6 font-medium text-gray-600 hover:text-gray-400'><Link href="/">Community</Link></li>
        </ul>
         <ul className="hidden md:flex items-center">
            <li className='mr-2 font-medium text-gray-600'><a href="#" className='rounded-md  py-1 px-4 hover:text-primary hover:bg-sky-50 transition-all'>Login</a></li>
            <li className='mr-2 font-medium text-gray-600'><a href="#" className='rounded-md border border-primary-300 bg-primary py-1 px-4 text-white text-sm font-medium text-white-700 shadow-sm hover:bg-primary-200 transition-all' style={{whiteSpace: "nowrap"}}>Sign In</a></li>
        </ul>
        <ul className="flex md:hidden items-center">
            <li className='mr-2 font-medium text-gray-600'><a href="#" className='rounded-md border border-primary-300 bg-primary py-1 px-4 text-white text-sm font-medium text-white-700 shadow-sm hover:bg-primary-200 transition-all' style={{whiteSpace: "nowrap"}}>SignIn | Login</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
