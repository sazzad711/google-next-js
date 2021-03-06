import Head from 'next/head'
import Avatar from '../components/Avatar'
import {  MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';


export default function Home() {

  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return ;

    router.push(`/search?term=${term}`);

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
     <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className='flex space-x-4 items-center'>
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className="link ">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://pbs.twimg.com/profile_images/527417066580484098/3_ndeXKY.jpeg"/>
        </div>
        </header>
       <form className="flex flex-col items-center mt-20 flex-grow w-4/5 ">
         <Image
         
         src="https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" 
         alt="google logo"
         height={125}
         width={300}
         
         />
         <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:mx-w-2xl">
           <SearchIcon className="h-5 mr-3 text-gray-500" />
           <input
            ref={searchInputRef}
            type="text" className="focus:outline-none flex-grow"/>
           <MicrophoneIcon className="h-5" />
         </div>
         <div className="flex flex-col w-172 space-y-1 justify-center mt-8 sm:spac-y-0 sm:flex-row sm:space-x-4">
           <button onClick={search} className="btn">Google Search</button>
           <button onClick={search} className="btn">I'm Feeling Lucky</button>
         </div>
       </form>

       <Footer />
    </div>
  )
}
