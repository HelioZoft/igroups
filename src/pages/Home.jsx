import React from 'react'
import Banner from '../components/Home/Banner'
import Feature from '../components/Home/Feature'
import About from '../components/Home/About'
import Service from '../components/Home/Service'
import Team from '../components/Home/Team'
import Extra from '../components/Home/Extra'
import Testimonial from '../components/Home/Testimonial'
import Blog from '../components/Home/Blog'

const Home = () => {
  return (
    <div>

      <Banner />
      <Feature />
      <About />
      <Service />
      <Team/>
      <Extra/>
      <Testimonial/>
      <Blog/>
      
    </div>
  )
}

export default Home
