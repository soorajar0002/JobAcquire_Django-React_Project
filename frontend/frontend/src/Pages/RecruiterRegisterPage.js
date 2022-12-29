import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';
import RecruiterRegister from '../Components/Register/RecruiterRegister/RecruiterRegister';

const RecruiterRegisterPage = () => {
  return (
    <div>
      <NavBar />
      <div className=''>
        <RecruiterRegister />
      </div>
      <Footer />
    </div>
  );
};

export default RecruiterRegisterPage;
