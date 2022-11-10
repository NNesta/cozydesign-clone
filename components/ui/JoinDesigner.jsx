import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../layouts/Layout';


function JoinDesigner() {
  return (
    <Layout styles="h-fit relative">
        <video className='absolute -z-20  inset-0 w-full h-full  object-cover' loop muted autoPlay style={{'background-image':'url("https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86da0e3af903761f6c302c_Black And White Video Of Man Infront Of The Computer-poster-00001.jpg")'}} >
            <source src='/assets/video.mp4' />
            <source src='/assets/video.mp4' />
        </video>
        <div className='absolute -z-10 inset-0 w-full h-full bg-black bg-opacity-75' />
     <div className='flex flex-col lg:flex-row items-center gap-8 min-w-0 lg:min-w-[915px] max-w-[1200px] px-16 h-full py-16 lg:w-[85%] mx-auto'>
      <Image src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5c86db21b4d0ca56dee6a263_sddd_lockup_reverse.svg' width={120} height={102.52}/>
    <div className='flex flex-col h-full pl-24 justify-center items-start'>
    <h3 className='font-fraunces7 text-brown-100 text-7xls mb-6 font-semibolder'>
        <em>Psst… </em>
        <br/>
        "are you a designer? "
    </h3>
    <p className='font-fraunces7 text-brown-100 font-mediumSm text-xls4 -mt-6 '>
        "Consider joining our "
        <Link href="/">San Diego Design Designers</Link>
        " group. More than 700 people, we meet online via Slack and in person at social events around the city. It’s a great opportunity to share ideas, get inspired, find support, and celebrate great design."
    </p>
    </div>
     </div>
    </Layout>
  )
}

export default JoinDesigner