import React from 'react';
import Header from '../../components/Header';
import "./home.css";
import Story  from '../../components/Story';
import Services from '../../components/Services';
import Features from '../../components/Features';
import Works from '../../components/Works';
import About from '../../components/About';
import Contact from '../../components/Contact';

const Home = () => {
  return (
    <div> 
        <Header />
        <Story />
        <Services />
        <Features />
        <Works />
        <About /> 
        <Contact />

      
    </div>
  )
}

export default Home
