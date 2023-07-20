import Logo from "./HeaderSvgIcons/Logo";
import "./header.css"

const HeaderBar = () => {
    return (
        <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800 page-header">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div className="flex header-navigation">
                <a href="https://flowbite.com" className="flex items-center">
                    <Logo />
                    {/* <img src="ßßßsarhdas" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                    {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">logo</span> */}
                </a>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 px-5" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 header-links">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Integrations</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Customers</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Enterprise</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
            <div className="flex items-center lg:order-2 header-btns">
                <a href="#" className="contact-link">Contact</a>
                <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 log-in-link">Log in</a>
                <a href="#" className="signup-link rounded-lg">Sign Up</a>
            </div>
            
        </div>
    </nav>
</header>
    );
}

export default HeaderBar;