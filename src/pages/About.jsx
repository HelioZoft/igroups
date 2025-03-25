import React from 'react'
import Banner from '../components/About/Banner';
import AboutUs from '../components/About/AboutUs';
import Contact1 from '../components/About/Contact1';
import Contact2 from '../components/About/Contact2';
import Process from '../components/About/Process';
import Works from '../components/About/Works';


const About = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Works />
      <Contact1 />
      <Contact2 />
      <Process />
    </div>
  )
}

export default About
