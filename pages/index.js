import Head from 'next/head'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from "../components/Footer"
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
      e.preventDefault();
      const term = searchInputRef.current.value;

      if(!term) return;

      router.push(`/search?term=${term}`)
    }



    return (
    <div className="flex flex-col justify-center h-screen items-center dark:bg-gray-900 bg-opacity-25">
      <Head>
        <title>Searchify</title>
        <meta name="description" content="Hosting your own Searchengine was never easier." />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
        {/* Header */}
        <header className="flex w-full p-5 justify-between text-sm text-grey-700 dark:text-white">
            {/* Left */}
            <div>
            <a className="flex space-x-4 items-center">
                <a href="https://jusoft.dev"><p className="link">JuSoft</p></a>
                <a href="https://github.com/jusoftdev/searchify"><p className="link">Github</p></a>
            </a>
            </div>
            {/* Right */}
            <div className="flex space-x-4 items-center">
                <p className="link">Report</p>
                <a href="https://lnkdto.link"><p className="link">lnkdto.link</p></a>

            </div>
        </header>
        {/* Body */}
        <form className="flex flex-col items-center mt-44 flex-grow w-4/5" >
            <Image
            src="https://i.imgur.com/AQGkrgl.png"
            height={100}
            width={300}
            />
            <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items center sm:max-w-xl lg:max-w-2xl">
                <SearchIcon className="h-5 mr-3 text-gray-500 dark:text-gray-300"/>
                <input ref={searchInputRef} type="text" className="flex grow w-full focus:outline-none dark:bg-gray-900 bg-opacity-25 dark:text-white"/>
            </div>
            <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                <button onClick={search} className="btn dark:bg-gray-800 dark:text-white">Search</button>
                <button onClick={search} className="btn dark:bg-gray-800 dark:text-white">Teleport me</button>
            </div>
        </form>
        <div className="text-center py-4 lg:px-4">
            <div
                className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="alert">
                <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">What's new</span>
                <span className="font-semibold mr-2 text-left flex-auto">Now supporting auto-darkmode</span>
            </div>
        </div>
        {/* Footer */}
        <Footer />
    </div>
  )
}

