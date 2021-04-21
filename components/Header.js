import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
     
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();

        const term = searchInputRef.current.value

        if (!term) return;

        router.push(`/search?term=${term}`);
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
            <Image
            src="https://logosmarken.com/wp-content/uploads/2020/09/Google-Logo.png"
            height={60}
            width={130}
            onClick={() => router.push('/')}
            className="cursor-pointer"
            />

            <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200
            rounded-full shadow-lg max-w-3xl items-center">
                <input ref={searchInputRef} 
                className="flex-grow w-full focus:outline-none"
                type="text" />
                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                onClick={() => (searchInputRef.current.value = "")}
                />
                <MicrophoneIcon
                className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"
                />
                <SearchIcon 
                className="h-6 text-blue-500 hidden sm:inline-flex"
                />
                <button hidden type="submit" onClick={search}>Serach</button>
            </form>
            <Avatar url="https://pbs.twimg.com/profile_images/527417066580484098/3_ndeXKY.jpeg"
            className="ml-auto"
             />
            </div>
            <HeaderOptions />

        </header>
    )
}

export default Header
