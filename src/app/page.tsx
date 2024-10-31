"use client"
import Hero from "@/Sections/Hero";
import Footer from "@/Sections/Footer"
import About from "@/Sections/About"
import FeaturesGrid from "@/Sections/FeaturesGrid"
import Header from '@/Sections/Header'


    
const Home = () => {

  return (
    <div className='overflow-hidden'>
      <div className=' w-auto md:m-10 rounded-[40px] bg-[rgba(218,228,255,0.07)] '> 
      <Header />
       <Hero/>
      </div> 
      <About/>
      <FeaturesGrid/>
      <Footer/>     
      </div> 
  )

}
export default Home