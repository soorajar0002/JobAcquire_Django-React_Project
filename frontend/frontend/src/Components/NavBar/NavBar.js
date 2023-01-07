import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import './NavBar.css';
import {useSelector,useDispatch} from 'react-redux';
import { logOut } from '../../Redux/Reducers/AuthSlice'
const NavBar = () => {

  let {user} = useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  console.log("log user",user.isRecLoggedIn)
  console.log("log",user.isLoggedIn)
  const logout = () => {
    
    dispatch(logOut());
    
  };
  return (
    <div>
      <nav className="bg-white-800 border-b-2  bg-white  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between  h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/"><img
                  className=""
                  src="https://i.ibb.co/F01J7zD/Job-Acquire.png"
                  alt="Workflow"
                /></Link>
              </div>
              <div className="hidden lg:block nav-adjust ">
                <div className="ml-10 flex  items-baseline space-x-6 ">
                  <Link
                    to="/"
                    className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    HOME
                  </Link>
                  <Link
                    to="/"
                    className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    DISCOVER JOB
                  </Link>
                  <Link
                    to="/"
                    className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    CAREER TIPS
                  </Link>
                  {user.isLoggedIn?<Link
                    to=""
                    
                    
                    className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {' '}
                    LOGOUT
                  </Link>:user.isRecLoggedIn?<Link
                    to=""
                    
                    
                    className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {' '}
                    LOGOUT
                  </Link>: <Link
                    to="/login"
                    className="text-dark-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {' '}
                    LOGIN
                  </Link> }
                 
                </div>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="lg:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/"
                  className="text-dark-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  HOME
                </Link>
                <Link
                  to="/"
                  className="text-dark-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  DISCOVER JOB
                </Link>
                <Link
                  to="/"
                  className="text-dark-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  CAREER TIPS
                </Link>
                {user.isLoggedIn?<Link
                    to="/login"
                    
                    className="text-dark-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {' '}
                    LOGOUT
                  </Link>: <Link
                    to="/login"
                    className="text-dark-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {' '}
                    LOGIN
                  </Link> }
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <main>
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
         
          <div className="px-4 py-4 sm:px-0"></div>
          
        </div>
      </main>
    </div>
  );
};

export default NavBar;
