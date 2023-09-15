import React from 'react'
import {Button, Link} from "@nextui-org/react";
import './home.css'
import Footer from '../Components/Footer';
import Modal from '../Components/videoModal'

const Home = () => {
  return (
    <div className=''>
        <h1 className='md:text-[7rem] text-[#333333] lg:text-7xl font-bold text-center mt-14 text-4xl'>Lobe <span className='text-[#04ddb2] '>Tour</span></h1>
        <div className='md:w-8/12 md:mx-[17%] lg:mx-[25%] lg:w-6/12 justify-center text-center '>
        <center className='md:font-medium md:text-3xl text-center md:mt-10 text-[#454545] lg:text-2xl lg:font-normal  py-6 xs:px-10'>Build your first machine learning model in ten minutes. No code or experience required.</center>
        </div>  
        <Modal/>
        <div className='md:w-8/12 md:mx-[18%] lg:mx-[30%] lg:w-5/12'>
          <p className='lex text-[#333333] text-center xs:text-4xl xs:px-10 xs:pt-2 xs:pb-4 md:text-6xl font-bold'>Train your app with Lobe</p>
        </div>
        <div className=' text-center'>
        <Button className="text-lg lg:rounded-3xl lg:font-medium lg:px-10 lg:py-6 lg:mt-12 mb-20 md:mt-9 md:py-6 md:px-14 md:text-2xl xs:px-8 xs:text-xl" as={Link} href="#" variant="flat"
          style={{
            backgroundColor: "#04ddb2",
            color: "white"
          }}>
           Download
          </Button>
        </div>
        

        {/* FOOTER */}

        <Footer/>
    </div>

  )
}

export default Home