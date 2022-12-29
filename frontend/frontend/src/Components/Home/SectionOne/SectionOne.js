import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Images/homeimgone.png';
import './SectionOne.css';

const SectionOne = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10 mx-10 section-one ">
        <div className="cols-span-1 grid  place-items-center img-one">
          <img src={img1} alt="img1" />
        </div>
        <div className="cols-span-1 text-center ">
          <h1 className="my-4  font-bold leading-tight text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black text-4xl ">
            Make the right choice when choosing your new job.
          </h1>
          <p className="leading-normal text-xl mb-8 text-center ">
            <span className=''>JOB<span className="brand-name">ACQUIRE</span></span> will help you and
            recommend a workplace based on your criteria. Fast, safe and
            relible.
          </p>
          <Link to="/register">
            {' '}
            <button class="mx-auto lg:mx-0   text-gray-800 font-bold l my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out register-btn">
             <h1 className=''>REGISTER NOW</h1> 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
