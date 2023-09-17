import React from 'react'
import {Button, Link} from "@nextui-org/react";
import Lobe1 from '../Assets/Lobe Examples - Machine Learning Made Easy.mp4'
import Lobe2 from '../Assets/Lobe Examples - Machine Learning Made Easy_2.mp4'
import Lobe3 from '../Assets/Lobe Examples - Machine Learning Made Easy_3.mp4'
import Lobe4 from '../Assets/Lobe Examples - Machine Learning Made Easy_4.mp4'
import Lobe5 from '../Assets/Lobe Examples - Machine Learning Made Easy_5.mp4'
import Lobe6 from '../Assets/Lobe Examples - Machine Learning Made Easy_6.mp4'
import Lobe7 from '../Assets/Lobe Examples - Machine Learning Made Easy_7.mp4'
import Lobe8 from '../Assets/Lobe Examples - Machine Learning Made Easy_8.mp4'
import Lobe9 from '../Assets/Lobe Examples - Machine Learning Made Easy_9.mp4'
import Lobe10 from '../Assets/Lobe Examples - Machine Learning Made Easy_10.mp4'
import Lobe11 from '../Assets/Lobe Examples - Machine Learning Made Easy_11.mp4'
import Lobe12 from '../Assets/Lobe Examples - Machine Learning Made Easy_12.mp4'
import Lobe13 from '../Assets/Lobe Examples - Machine Learning Made Easy_13.mp4'
import Lobe14 from '../Assets/Lobe Examples - Machine Learning Made Easy_14.mp4'
import Lobe15 from '../Assets/Lobe Examples - Machine Learning Made Easy_15.mp4'
import Lobe16 from '../Assets/Lobe Examples - Machine Learning Made Easy_16.mp4'

const Example = () => {
  return (
    <>
    <div className='my-20'>
     <p className='text-[#333333] text-center font-bold text-7xl'>Lobe <span className='text-[#04ddb2]'>Examples</span></p>
     <p className='text-3xl text-center mt-5 mx-[21rem]'>One tool, endless possibilities. Discover all the machine learning models you can train with Lobe.</p>
    </div>
                        
                    {/* videos */}
    <div className='w-full justify-center content-center '>
      <div className=' grid grid-cols-2 gap-24 mt-8 mx-24'>

        <div className=''>
          <video src={Lobe1} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Plant Species</p>
          <p className='text-2xl mx-4'>Train your app to distinguish between different species of plants to help people identify poisonous vegetation.</p>
          </div>

        <div className=''>
          <video src={Lobe2} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Hand Gestures</p>
          <p className='text-2xl mx-4'>Train your app to understand the movement of your hand to create new kinds of immersive user experiences.</p>
        </div>
        
        <div className=''>
          <video src={Lobe3} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Personal Trainer</p>
          <p className='text-2xl mx-4'>Train your app to recognize different workout positions to create an automated personal trainer that counts your reps.</p>
        </div>

        <div className=''>
          <video src={Lobe4} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Emotional Reactions</p>
          <p className='text-2xl mx-4'>Train your app to react to different expressions allowing people to send emoji reactions using just their face.</p>
        </div>

        <div className=''>
          <video src={Lobe5} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Interactive Painting</p>
          <p className='text-2xl mx-4'>Train your app to respond with sounds and stories while kids draw to create engaging learning experiences.</p>
        </div>

        <div className=''>
          <video src={Lobe6} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Safety Precautions</p>
          <p className='text-2xl mx-4'>Train your app to monitor when masks are being correctly worn to help encourage proper safety precautions.</p>
        </div>

        <div className=''>
          <video src={Lobe7} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Whale Watching</p>
          <p className='text-2xl mx-4'>Train your app to detect marine life in tourist photos to help conservationists map and protect the ocean.</p>
        </div>

        <div className=''>
          <video src={Lobe8} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Beehive Health</p>
          <p className='text-2xl mx-4'>Train your app to monitor the entrance of hives to help beekeepers track and analyze the health of their colonies.</p>
        </div>

        <div className=''>
          <video src={Lobe9} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Baby Monitor</p>
          <p className='text-2xl mx-4'>Train your app to detect when babies are sleeping or awake to notify parents before they start crying.</p>
        </div>

        <div className=''>
          <video src={Lobe10} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Smart Checkout</p>
          <p className='text-2xl mx-4'>rain your app to recognize different types of produce to help checkout faster without the need to remember price look-up codes.</p>
        </div>

        <div className=''>
          <video src={Lobe11} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Fire Watch</p>
          <p className='text-2xl mx-4'>Train your app to detect smoke and flames using remote cameras to help spot new wildfires before it's too late.</p>
        </div>

        <div className=''>
          <video src={Lobe12} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Scientific Research</p>
          <p className='text-2xl mx-4'>Train your app to detect organisms under a microscope to help researchers analyze large quantities of scientific samples.</p>
        </div>

        <div className=''>
          <video src={Lobe13} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Wildlife Behavior</p>
          <p className='text-2xl mx-4'>Train your app to detect wildlife behavior with remote cameras to track population and migration patterns over a large area.</p>
        </div>

        <div className=''>
          <video src={Lobe14} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Telescopic Imagery</p>
          <p className='text-2xl mx-4'>Train your app to recognize different celestial bodies to help astronomers analyze large amounts of telescopic imagery.</p>
        </div>

        <div className=''>
          <video src={Lobe15} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Telescopic Imagery</p>
          <p className='text-2xl mx-4'>Train your app to recognize different celestial bodies to help astronomers analyze large amounts of telescopic imagery.</p>
        </div>

        <div className=''>
          <video src={Lobe16} autoPlay loop muted  className=' rounded-t-3xl'/>
          <p className='text-2xl font-semibold mx-4'>Aerial Imagery</p>
          <p className='text-2xl mx-4'>Train your app to monitor aerial imagery to gain insights into macro level changes happening around the globe.</p>
        </div>
      </div>
    </div>

    <div className='md:w-8/12 md:mx-[18%] lg:mx-[30%] lg:w-5/12 mt-10'>
          <p className='lex text-[#333333] text-center xs:text-4xl xs:px-10 xs:pt-2 xs:pb-4 md:text-6xl font-bold'>Train your app with Lobe</p>
        </div>
        <div className=' text-center'>
        <Button className="btn text-lg hover:p-7 lg:rounded-3xl lg:font-medium lg:px-10 lg:py-6 lg:mt-12 mb-20 md:mt-9 md:py-6 md:px-14 md:text-2xl xs:px-8 xs:text-xl" as={Link} href="#" variant="flat"
          style={{
            backgroundColor: "#04ddb2",
            color: "white"
          }}>
           Download
          </Button>
        </div>
        
    </>
  )
}

export default Example