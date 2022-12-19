import React from 'react';
import Footer from '../Components/Footer/Footer';
import SectionOne from '../Components/Home/SectionOne/SectionOne';
import SectionThree from '../Components/Home/SectionThree/SectionThree';
import SectionTwo from '../Components/Home/SectionTwo/SectionTwo';
import NavBar from '../Components/NavBar/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
