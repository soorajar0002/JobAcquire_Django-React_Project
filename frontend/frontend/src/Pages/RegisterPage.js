import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import UserRegister from '../Components/Register/UserRegister/UserRegister';

const RegisterPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto ">
        <UserRegister />
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
