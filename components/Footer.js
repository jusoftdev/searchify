import { GlobeIcon } from "@heroicons/react/solid"

function Footer(){
    return(
        <footer className='grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-400 dark:bg-gray-800'>
            <div className="px-8 py-3">
                <p>Beta 1.2</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3'>
                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                    <GlobeIcon className="h-5 mr-1 text-green-700"/>
                    Powered with NextJS and Google Search API by JuSoft
                </div>
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p>About</p>
                    <p>How Search Works</p>
                    <p>Discord</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
