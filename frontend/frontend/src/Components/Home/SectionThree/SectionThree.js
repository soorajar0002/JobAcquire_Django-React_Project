import React from 'react';
import './SectionThree.css';
import image1 from '../../../Images/sectionthreeone.png';
import image2 from '../../../Images/sectionthreetwo.png';
import image3 from '../../../Images/sectionthreethree.png';
import google from '../../../Images/google.png';
import amazon from '../../../Images/amazon.png';
import ey from '../../../Images/ey.png';
import microsoft from '../../../Images/microsoft.png';
import tata from '../../../Images/tata.png';
import capgemini from '../../../Images/capgemini.png';
import infosys from '../../../Images/infosys.png';
import easport from '../../../Images/easport.png';

const SectionThree = () => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="my-10 text-3xl font-bold leading-tight text-center section-three">
          Why Choose us?
        </h1>
        <p className="text-xl  leading-tight">
          Make the right hires, find the right job, more quickly
        </p>
        <p className="text-xl  leading-tight">
          with the world's first recruitment software.
        </p>
      </div>
      <div className="grid  lg:grid-cols-3 text-center font-bold  place-items-center">
        <div className="my-4">
          <img src={image1} alt="img1" />
          <p>Find and attract candidates</p>
        </div>
        <div>
          <img className="my-4" src={image2} alt="img2" />
          <p>Make the best hire, in half the time</p>
        </div>
        <div>
          <img className=" my-4 ml-12" src={image3} alt="img3" />
          <p>Move the right applicant forward</p>
        </div>
      </div>
      <div>
        <h1 className="my-10 text-3xl font-bold leading-tight text-center section-three-text">
          Top employers trust JobAcquire's on-demand recruiting solutions
        </h1>
      </div>
      <div>
        <div className="grid  lg:grid-cols-4 place-items-center my-4 ">
          <div className="my-6">
            <img src={amazon} alt="amazon" />
          </div>
          <div className="my-6">
            <img src={google} alt="google" />
          </div>
          <div className="my-6">
            <img className="mb-10" src={ey} alt="ey" />
          </div>
          <div className="my-6">
            <img src={infosys} alt="infosys" />
          </div>
        </div>
        <div className="grid  lg:grid-cols-3  place-items-center my-4 mx-5 ">
          <div className="my-6">
            <img src={microsoft} alt="microsoft" />
          </div>
          <div className="my-6">
            <img src={tata} alt="tata" />
          </div>
          <div className="my-6">
            <img src={capgemini} alt="capgemini" />
          </div>
        </div>
        <div className="grid place-items-center my-6">
          <img src={easport} alt="easport" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
