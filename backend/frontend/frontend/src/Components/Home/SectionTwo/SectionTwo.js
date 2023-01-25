import React from 'react';
import img2 from '../../../Images/homeimgtwo.jpg';
import './SectionTwo.css';

const SectionTwo = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-10 mx-10 section-two">
        <div className="cols-span-1 mt-10">
          <p className="mt-4 text-4xl font-bold leading-tight text-center  ">
            Software-based recruitment
          </p>
          <p className=" text-4xl font-bold leading-tight text-center   ">
            that brings large ideas and
          </p>
          <p className=" text-4xl font-bold leading-tight text-center   ">
            competencies conjointly.
          </p>
        </div>
        <div className="cols-span-1 grid  place-items-center">
          <img src={img2} alt="img1" />
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
