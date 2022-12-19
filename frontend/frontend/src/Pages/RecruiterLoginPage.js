import React from 'react';
import Footer from '../Components/Footer/Footer';
import RecruiterLogin from '../Components/Login/RecruiterLogin/RecruiterLogin';
import NavBar from '../Components/NavBar/NavBar';

const RecruiterLoginPage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <RecruiterLogin />
      </div>
      <Footer />
    </div>
  );
};

export default RecruiterLoginPage;
