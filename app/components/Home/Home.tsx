import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import HostingOptions from './HostingOptions.tsx/HostingOptions'
import DomainSearch from './DomainSearch/DomainSearch'
import Feature from './Feature/Feature'
import Price from './Price/Price'
import Review from './ClientReview/Review'
import Blog from './Blog/Blog'


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <About/>
      <HostingOptions/>
      <DomainSearch/>
      <Feature/>
      <Price/>
      <Review/>
      <Blog/>
    </div>
  )
}

export default Home

