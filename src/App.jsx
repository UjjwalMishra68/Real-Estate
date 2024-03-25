import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Logo from './Components/Logo/Logo'
import Carousel from './Components/Carousel/Carousel'
import Accordian from './Components/Value/Accordian'
import ContactUs from './Components/ContactUs/ContactUs'
import CTA from './Components/CTA/CTA'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Logo/>
   <Carousel/>
   <Accordian/>
   <ContactUs/>
   <CTA/>
   <Footer/>
   </>
  )
}

export default App
