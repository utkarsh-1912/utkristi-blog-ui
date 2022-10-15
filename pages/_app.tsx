import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthContextProvider from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'
import { useRouter } from 'next/router'
import { Toaster } from "react-hot-toast";


const noAuthRequired = ['/','/login','/signin'];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return <>
  <AuthContextProvider>
    <Toaster
          position="top-center"
        ></Toaster>
  <div className="container mx-auto font-sans">
    <Navbar/>
    <main className='pb-28'>
      {noAuthRequired.includes(router.pathname)?(<Component {...pageProps}/>):(<ProtectedRoute><Component {...pageProps}/></ProtectedRoute>)}
    </main>
    <Footer/>
  </div>
  </AuthContextProvider>
  </>
}

export default MyApp
